package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.AppointmentRepository;
import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.dto.AppointmentDto;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;

    public AppointmentService(AppointmentRepository appointmentRepository, UserRepository userRepository) {
        this.appointmentRepository = appointmentRepository;
        this.userRepository = userRepository;
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    public Appointment saveAppointment(AppointmentDto appointmentDto) {
        User patient = userRepository.findByUsername(appointmentDto.getUsername());
        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setOccupation(Occupation.valueOf(appointmentDto.getOccupation()));
        appointment.setNotes(appointmentDto.getNotes());
        appointment.setDate(appointmentDto.getDate());
        appointment.setGrade(appointmentDto.getGrade());
        return appointmentRepository.save(appointment);
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

    public List<Appointment> getAppointmentsByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if (user.getOccupation() == Occupation.DOCTOR || user.getOccupation() == Occupation.NURSE) {
            return getAppointmentsByDoctorOrNurse(user);
        }
        return getAppointmentsByTeacherOrStudent(user);
    }

    private List<Appointment> getAppointmentsByTeacherOrStudent(User user) {
        return appointmentRepository.findAppointmentByPatient(user);
    }

    private List<Appointment> getAppointmentsByDoctorOrNurse(User user) {
        boolean isNurse = user.getOccupation() == Occupation.NURSE;

        Stream<Appointment> stateFalseAppointments = appointmentRepository
                .findAppointmentByOccupationAndStateFalse(user.getOccupation())
                .stream();

        Stream<Appointment> stateTrueAppointments = isNurse
                ? appointmentRepository.findAppointmentByNurseAndStateTrue(user).stream()
                : appointmentRepository.findAppointmentByDoctorAndStateTrue(user).stream();

        return Stream.concat(stateFalseAppointments, stateTrueAppointments).toList();
    }

    public Appointment updateAppointmentStateAndUser(Long appointmentId, String username) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new RuntimeException("Appointment not found"));
        appointment.setState(true);
        User user = userRepository.findByUsername(username);
        if ("doctor".equalsIgnoreCase(user.getOccupation().toString())) {
            appointment.setDoctor(user);
        } else if ("nurse".equalsIgnoreCase(user.getOccupation().toString())) {
            appointment.setNurse(user);
        } else {
            throw new IllegalArgumentException("Invalid role: must be 'doctor' or 'nurse'");
        }
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAppointmentsByPatientId(Long id) {
        User patient = userRepository.findById(id).orElse(null);
        return appointmentRepository.findAppointmentByPatient(patient);
    }
}
