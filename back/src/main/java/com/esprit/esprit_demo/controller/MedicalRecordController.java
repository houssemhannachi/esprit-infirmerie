package com.esprit.esprit_demo.controller;

import com.esprit.esprit_demo.dto.AppointmentDto;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.service.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medical-record")
public class MedicalRecordController {
    private final AppointmentService appointmentService;

    public MedicalRecordController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }


    @GetMapping
    public List<Appointment> getAppointmentsByUsername(@RequestParam String username) {
        return appointmentService.getAppointmentsByUsername(username);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
        return appointmentService.getAppointmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody AppointmentDto appointmentDto) {
        return appointmentService.saveAppointment(appointmentDto);
    }

    //@PutMapping("/{id}")
    //public ResponseEntity<Appointment> updateAppointment(@PathVariable Long id, @RequestBody Appointment appointment) {
    //  return appointmentService.getAppointmentById(id)
    //          .map(existingAppointment -> {
    //            appointment.setId(id);
    //          return ResponseEntity.ok(appointmentService.saveAppointment(appointment));
    //    })
    //  .orElse(ResponseEntity.notFound().build());
    //}

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
        if (appointmentService.getAppointmentById(id).isPresent()) {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }


}
