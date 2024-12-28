package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.MedicalRecordRepository;
import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.entity.MedicalRecord;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MedicalRecordService {
    private final MedicalRecordRepository appointmentRepository;
    private final UserRepository userRepository;

    public MedicalRecord getMedicalRecord(String username) {
        return appointmentRepository.findMedicalRecordByPatientUsername(username);
    }

    public MedicalRecord saveMedicalRecord(MedicalRecord medicalRecord) {
        return appointmentRepository.save(medicalRecord);
    }
}
