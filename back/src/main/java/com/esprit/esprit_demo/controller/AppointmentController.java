package com.esprit.esprit_demo.controller;

import com.esprit.esprit_demo.dto.AppointmentDto;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.User;
import com.esprit.esprit_demo.service.AppointmentService;
import com.esprit.esprit_demo.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@AllArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;
    private final UserService userService;
    @GetMapping
    public List<Appointment> getAppointmentsByUsername(@RequestParam String username) {
        return appointmentService.getAppointmentsByUsername(username);
    }

    @GetMapping("/patient-id/{id}")
    public List<Appointment>  getAppointmentsByPatientId(@PathVariable Long id) {
        return appointmentService.getAppointmentsByPatientId(id);
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody AppointmentDto appointmentDto) {
        return appointmentService.saveAppointment(appointmentDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
        if (appointmentService.getAppointmentById(id).isPresent()) {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/update-appointment/{appointmentId}")
    public Appointment updateAppointmentStateAndUser(
            @PathVariable Long appointmentId,
            @RequestParam String username) {
        return appointmentService.updateAppointmentStateAndUser(appointmentId, username);
    }

    @GetMapping("/user/{id}")
    public User getUserByAppointmentId(@PathVariable Long id) {
        return userService.getUserByAppointmentId(id);
    }

}
