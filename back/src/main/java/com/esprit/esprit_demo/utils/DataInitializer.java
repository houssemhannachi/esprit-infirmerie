package com.esprit.esprit_demo.utils;

import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.entity.Role;
import com.esprit.esprit_demo.entity.User;
import lombok.Data;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Data
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        userRepository.deleteAll();

        User student = new User();
        student.setUsername("alice");
        student.setPassword(passwordEncoder.encode("password123"));
        student.setRole(Role.STUDENT);
        userRepository.save(student);

        User teacher = new User();
        teacher.setUsername("bob");
        teacher.setPassword(passwordEncoder.encode("teacherSecret"));
        teacher.setRole(Role.TEACHER);
        userRepository.save(teacher);

        User physician = new User();
        physician.setUsername("carol");
        physician.setPassword(passwordEncoder.encode("physicianPass"));
        physician.setRole(Role.PHYSICIAN);
        userRepository.save(physician);

        User nurse = new User();
        nurse.setUsername("david");
        nurse.setPassword(passwordEncoder.encode("nursePass"));
        nurse.setRole(Role.NURSE);
        userRepository.save(nurse);
    }
}