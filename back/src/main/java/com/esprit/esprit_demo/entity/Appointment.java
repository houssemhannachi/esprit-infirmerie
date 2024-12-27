package com.esprit.esprit_demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient")
    private User patient;

    @ManyToOne
    @JoinColumn(name = "doctor")
    private User doctor;

    @ManyToOne
    @JoinColumn(name = "nurse")
    private User nurse;

    @Column(nullable = false)
    private Date date;

    @Enumerated(EnumType.STRING)
    private Occupation occupation;

    private String notes;
    private String grade;
    private Boolean state = false;
}
