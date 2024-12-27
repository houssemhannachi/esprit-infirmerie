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
        User student = userRepository.findByUsername(appointmentDto.getUsername());
        Appointment appointment = new Appointment();
        appointment.setStudent(student);
        appointment.setOccupation(Occupation.valueOf(appointmentDto.getOccupation()));
        appointment.setNotes(appointmentDto.getNotes());
        appointment.setDate(appointmentDto.getDate());
        return appointmentRepository.save(appointment);
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }

}
