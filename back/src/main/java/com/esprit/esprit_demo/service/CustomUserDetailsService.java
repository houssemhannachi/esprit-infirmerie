package com.esprit.esprit_demo.service;

import com.esprit.esprit_demo.configuration.CustomUserDetails;
import com.esprit.esprit_demo.dao.UserRepository;
import com.esprit.esprit_demo.entity.User;
import lombok.Data;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Data
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public CustomUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        return new CustomUserDetails(user);
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsUserByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsUserByEmail(email);
    }

    public void save(User user) {
        userRepository.save(user);
    }
}