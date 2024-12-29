package com.esprit.esprit_demo.dto;

import com.esprit.esprit_demo.entity.Medicine;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class PrescriptionDto {
    private Long appointmentId;
    private List<Medicine> medicines;
    private String remarks;
}
