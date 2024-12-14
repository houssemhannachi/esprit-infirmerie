package com.esprit.esprit_demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

    @GetMapping("/home")
    @ResponseBody
    public String home() {
        return "Welcome to the home page (accessible by all authenticated users)";
    }

    @GetMapping("/student/dashboard")
    @ResponseBody
    public String studentDashboard() {
        return "Student Dashboard - only STUDENTS can see this";
    }

    @GetMapping("/teacher/dashboard")
    @ResponseBody
    public String teacherDashboard() {
        return "Teacher Dashboard - only TEACHERS can see this";
    }

    @GetMapping("/physician/dashboard")
    @ResponseBody
    public String physicianDashboard() {
        return "Physician Dashboard - only PHYSICIANS can see this";
    }

    @GetMapping("/nurse/dashboard")
    @ResponseBody
    public String nurseDashboard() {
        return "Nurse Dashboard - only NURSES can see this";
    }
}

