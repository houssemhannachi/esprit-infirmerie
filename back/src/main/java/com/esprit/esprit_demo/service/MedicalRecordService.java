package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.MedicalRecordRepository;
import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.entity.MedicalRecord;
import com.esprit.esprit_demo.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MedicalRecordService {
    private final MedicalRecordRepository medicalRecordRepository;
    private final UserRepository userRepository;

    public MedicalRecord getMedicalRecord(String username) {
        return medicalRecordRepository.findMedicalRecordByPatientUsername(username);
    }

    public MedicalRecord saveMedicalRecord(Long id, MedicalRecord medicalRecord) {
        User patient = userRepository.findById(id).orElse(null);
        medicalRecord.setPatient(patient);
        return medicalRecordRepository.save(medicalRecord);
    }

    public MedicalRecord getMedicalRecordByPatientId(Long id) {
        return medicalRecordRepository.findMedicalRecordByPatientId(id);
    }
}
