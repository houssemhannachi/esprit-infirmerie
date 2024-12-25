import {Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {UserComponent} from '../user/user.component';
import {FormsModule} from '@angular/forms';
import {AppointmentService} from '../../../core/services/appointment.service';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';

@Component({
  selector: 'app-make-appointment',
  imports: [HeaderComponent, FooterComponent, UserComponent, LeftSideBarComponent,
    FormsModule
  ],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.css'
})
export class MakeAppointmentComponent {
  appointment: any = {
    classe: '',
    type: '',
    date: '',
    notes: '',
  };

  constructor(private appointmentService: AppointmentService) {
  }

  createAppointment() {
    this.appointment.student = 1;
    if (this.appointment.type === 'medecin') {
      this.appointment.professional = 2;
    } else if (this.appointment.type === 'infirmier') {
      this.appointment.professional = 3;
    }
    console.log(this.appointment);
    this.appointmentService.createAppointment(this.appointment).subscribe(
      (response) => {
        console.log('Appointment created successfully:', response);
      },
      (error) => {
        console.error('Error creating appointment:', error);
      }
    );
  }

}
