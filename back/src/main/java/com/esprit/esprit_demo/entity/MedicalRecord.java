package com.esprit.esprit_demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "appointment")
    private User patient;

    @Column(nullable = false)
    private Date birthDate;

    private String allergies;
    private String bloodType;

}
