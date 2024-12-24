import {Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {UserComponent} from '../user/user.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-make-appointment',
  imports: [HeaderComponent, FooterComponent, UserComponent,
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
    notes: ''
  };

  submitAppointment() {
    console.log('Appointment Submitted:', this.appointment);
    // You can handle further logic here, such as sending the data to a backend.
  }

}
