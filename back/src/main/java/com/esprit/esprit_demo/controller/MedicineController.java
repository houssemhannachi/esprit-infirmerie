package com.esprit.esprit_demo.controller;

import com.esprit.esprit_demo.dto.AppointmentDto;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.Medicine;
import com.esprit.esprit_demo.service.MedicineService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicine")
public class MedicineController {
    private final MedicineService medicineService;

    public MedicineController(MedicineService medicineService) {
        this.medicineService = medicineService;
    }
    @PostMapping
    public Medicine addMedicine(@RequestBody Medicine medicine) {
        return medicineService.saveMedicine(medicine);
    }

    @GetMapping
    public List<Medicine> getAllMedicines() {
        return medicineService.getAll();
    }


}
