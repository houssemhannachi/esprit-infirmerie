package com.esprit.esprit_demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AppointmentDto {
    private String username;
    private String grade;
    private String occupation;
    private Date date;
    private String notes;

    public AppointmentDto(String username, String grade, String occupation, Date date, String notes) {
        this.username = username;
        this.grade = grade;
        this.occupation = occupation;
        this.date = date;
        this.notes = notes;
    }
}
