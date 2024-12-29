package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAllUsersByOccupation(Occupation occupation) {
        return userRepository.findAllByOccupation(occupation);
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
