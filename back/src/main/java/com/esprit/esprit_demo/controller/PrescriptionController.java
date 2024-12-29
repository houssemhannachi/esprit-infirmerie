package com.esprit.esprit_demo.controller;

import com.esprit.esprit_demo.dto.AppointmentDto;
import com.esprit.esprit_demo.dto.PrescriptionDto;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.Prescription;
import com.esprit.esprit_demo.service.AppointmentService;
import com.esprit.esprit_demo.service.PrescriptionService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prescription")
@AllArgsConstructor
public class PrescriptionController {
    private final PrescriptionService prescriptionService;

    @PostMapping
    public Prescription createPrescription(@RequestBody PrescriptionDto prescriptionDto) {
        return prescriptionService.savePrescription(prescriptionDto);
    }

    @GetMapping("/appointment/{id}")
    public Prescription getByAppointmentId(@PathVariable Long id) {
        return prescriptionService.findByAppointmentId(id);
    }

}
