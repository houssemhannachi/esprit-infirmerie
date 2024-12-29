package com.esprit.esprit_demo.dao;

import com.esprit.esprit_demo.entity.MedicalRecord;
import com.esprit.esprit_demo.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
    MedicalRecord findMedicalRecordByPatientUsername(String username);

    MedicalRecord findMedicalRecordByPatientId(Long id);
}