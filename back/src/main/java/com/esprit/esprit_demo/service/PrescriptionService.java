package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.AppointmentRepository;
import com.esprit.esprit_demo.dao.PrescriptionRepository;
import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.dto.PrescriptionDto;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.Prescription;
import com.esprit.esprit_demo.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@AllArgsConstructor
public class PrescriptionService {
    private final PrescriptionRepository prescriptionRepository;
    private final AppointmentRepository appointmentRepository;

    public List<Prescription> getAllPrescriptions() {
        return prescriptionRepository.findAll();
    }

    public Prescription savePrescription(PrescriptionDto prescriptionDto) {
        Appointment appointment = appointmentRepository.findById(prescriptionDto.getAppointmentId()).get();
        Prescription prescription = new Prescription();
        prescription.setAppointment(appointment);
        prescription.setMedicines(prescriptionDto.getMedicines());
        prescription.setRemarks(prescriptionDto.getRemarks());
        return prescriptionRepository.save(prescription);
    }

    public Prescription findByAppointmentId(Long id) {
        return prescriptionRepository.findByAppointmentId(id);
    }

}
