package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.AppointmentRepository;
import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;

    public List<User> findAllUsersByOccupation(Occupation occupation) {
        return userRepository.findAllByOccupation(occupation);
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByAppointmentId(Long id) {
        Appointment appointment = appointmentRepository.findById(id).get();
        return appointment.getPatient();
    }
}
