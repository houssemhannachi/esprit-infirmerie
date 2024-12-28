import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {Appointment} from '../../models/Appointment';
import {AppointmentService} from '../../../core/services/appointment.service';
import {CommonModule, DatePipe} from '@angular/common';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-appointment-list',
  imports: [HeaderComponent, FooterComponent, CommonModule, LeftSideBarComponent],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
  providers: [DatePipe]
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];
  userRole: string;
  username: string;

  constructor(private appointmentService: AppointmentService, private datePipe: DatePipe, private authService: AuthService) {
    this.userRole = this.authService.getUserRole();
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentService.getAppointments(this.authService.getUsername()).subscribe({
      next: (data) => {
        this.appointments = data;
        console.log(this.appointments)
        this.appointments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
      }
    });
  }
}
