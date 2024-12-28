package com.esprit.esprit_demo.dao;

import com.esprit.esprit_demo.entity.Medicine;
import com.esprit.esprit_demo.entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
    List<Prescription> findAllByAppointment_Patient_Username(String username);

}