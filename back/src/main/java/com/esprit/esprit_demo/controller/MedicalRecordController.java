package com.esprit.esprit_demo.controller;

import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.MedicalRecord;
import com.esprit.esprit_demo.service.MedicalRecordService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medical-record")
public class MedicalRecordController {
    private final MedicalRecordService medicalRecordService;

    public MedicalRecordController(MedicalRecordService medicalRecordService) {
        this.medicalRecordService = medicalRecordService;
    }

    @PostMapping("/{id}")
    public MedicalRecord createAppointment(@PathVariable Long id, @RequestBody MedicalRecord medicalRecord) {
        return medicalRecordService.saveMedicalRecord(id, medicalRecord);
    }
    @GetMapping("/patient-id/{id}")
    public MedicalRecord getMedicalRecordByPatientId(@PathVariable Long id) {
        return medicalRecordService.getMedicalRecordByPatientId(id);
    }
}
