import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {Appointment} from '../../models/Appointment';
import {AppointmentService} from '../../../core/services/appointment.service';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
  providers: [DatePipe]
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService, private datePipe: DatePipe) {
  }
  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
        console.log(this.appointments);
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
      }
    });
  }
}
