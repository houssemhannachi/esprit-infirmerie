package com.esprit.esprit_demo.dao;

import com.esprit.esprit_demo.entity.Appointment;
import com.esprit.esprit_demo.entity.Occupation;
import com.esprit.esprit_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findAppointmentByPatient(User patient);

    List<Appointment> findAppointmentByDoctorAndStateTrue(User doctor);

    List<Appointment> findAppointmentByNurseAndStateTrue(User nurse);

    List<Appointment> findAppointmentByOccupationAndStateFalse(Occupation occupation);

}
