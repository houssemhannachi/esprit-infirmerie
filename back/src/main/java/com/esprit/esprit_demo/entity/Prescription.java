package com.esprit.esprit_demo.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "appointment")
    private Appointment appointment;

    @ManyToMany
    private List<Medicine> medicines;
    private String remarks;
}
