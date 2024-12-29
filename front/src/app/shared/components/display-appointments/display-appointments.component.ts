import {Component} from '@angular/core';
import {FullCalendarModule} from '@fullcalendar/angular';
import {AppointmentService} from '../../../core/services/appointment.service';
import {Appointment} from '../../models/Appointment';
import {AuthService} from '../../auth/auth.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import {CommonModule, DatePipe} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {Router} from '@angular/router'; // Import the DayGrid plugin

@Component({
  selector: 'app-display-appointments',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, LeftSideBarComponent, HeaderComponent, FooterComponent],
  templateUrl: './display-appointments.component.html',
  styleUrl: './display-appointments.component.css',
  providers: [DatePipe]
})
export class DisplayAppointmentsComponent {
  calendarOptions: any = null;
  appointments: Appointment[] = [];
  userRole: string;
  username: string;

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.userRole = this.authService.getUserRole();
    this.username = authService.getUsername();
    this.loadAppointmentsAndInitCalendar();
  }

  loadAppointmentsAndInitCalendar() {
    this.appointmentService.getAppointments(this.authService.getUsername()).subscribe({
      next: (data) => {
        this.appointments = data;
        console.log(this.appointments);

        // Sort the appointments by date
        this.appointments.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Initialize calendar options after appointments are loaded
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          plugins: [dayGridPlugin],
          firstDay: 1,
          initialDate: new Date(),
          events: this.appointments.map(appointment => ({
            title: `${appointment.patient.firstName} ${appointment.patient.lastName} - ${appointment.notes}`,
            start: new Date(appointment.date),
            allDay: true,
            color: appointment.state ? 'green' : 'red', // Green for true, red for false
            extendedProps: {appointment}, // Store additional data
          })),
          eventClick: this.handleEventClick.bind(this) // Bind event click handler
        };

      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
      }
    });
  }

  handleEventClick(info: any) {
    const appointment = info.event.extendedProps.appointment; // Access the appointment object

    if (appointment.state) {
      this.handleTrueStateAppointment(appointment);
    } else {
      this.handleFalseStateAppointment(appointment);
    }
  }

// Function to handle state = true
  handleTrueStateAppointment(appointment: any) {
    console.log('Confirmed appointment:', appointment);
    this.router.navigate(['prescription/' + appointment.id]);
  }

  handleFalseStateAppointment(appointment: any): void {
    const formattedDate = this.datePipe.transform(appointment.date, 'yyyy-MM-dd');
    alert(`Tentative de modification du rendez-vous suivant :\n
    - Patient : ${appointment.patient.lastName} ${appointment.patient.firstName}
    - Date : ${formattedDate}`);

    this.changeState(appointment);
  }

  changeState(appointment: Appointment) {
    this.appointmentService.updateAppointment(appointment.id, this.username).subscribe({
      next: (data) => {
        this.loadAppointmentsAndInitCalendar();
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
      }
    });


  }
}
