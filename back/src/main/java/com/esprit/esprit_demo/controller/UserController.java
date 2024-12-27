package com.esprit.esprit_demo.controller;

import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.User;
import com.esprit.esprit_demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/by-occupation")
    public List<User> getAllUsersByOccupation(String occupation) {
        return userService.findAllUsersByOccupation(Occupation.valueOf(occupation));
    }
}
