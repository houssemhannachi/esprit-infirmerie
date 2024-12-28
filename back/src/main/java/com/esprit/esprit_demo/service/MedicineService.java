package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.MedicineRepository;
import com.esprit.esprit_demo.entity.Medicine;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MedicineService {
    private final MedicineRepository medicineRepository;

    public Medicine saveMedicine(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    public List<Medicine> getAll() {
        return medicineRepository.findAll();
    }
}
