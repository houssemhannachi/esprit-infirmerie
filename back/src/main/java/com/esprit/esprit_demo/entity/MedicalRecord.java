package com.esprit.esprit_demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "patient")
    private User patient;

    private Integer age;
    private Integer weight;
    private Integer height;

    private String allergies;
    private String bloodType;
    private String assurancePersonName;


}
