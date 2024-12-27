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
    @JoinColumn(name = "student")
    private User student;

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
    private Boolean state = false;
}
