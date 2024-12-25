package com.esprit.esprit_demo.dto;

import java.util.Date;

public class AppointmentDto {
    private Long student;
    private Long professional;
    private Date date;
    private String notes;

    public AppointmentDto(Long student, Long professional, Date date, String notes) {
        this.student = student;
        this.professional = professional;
        this.date = date;
        this.notes = notes;
    }

    public Long getStudent() {
        return student;
    }

    public void setStudent(Long student) {
        this.student = student;
    }

    public Long getProfessional() {
        return professional;
    }

    public void setProfessional(Long professional) {
        this.professional = professional;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
