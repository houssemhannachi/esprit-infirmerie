import {Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {UserComponent} from '../user/user.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppointmentService} from '../../../core/services/appointment.service';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-make-appointment',
  imports: [ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LeftSideBarComponent,
    FormsModule
  ],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.css'
})
export class MakeAppointmentComponent {
  appointment: any = {
    username: '',
    grade: '',
    occupation: '',
    date: '',
    notes: ''
  };
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private appointmentService: AppointmentService,
              private router: Router,
              private route: ActivatedRoute) {
    this.appointmentForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      grade: ['', Validators.required],
      occupation: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['', Validators.required],
    });
  }

  createAppointment() {
    this.appointmentService.createAppointment(this.appointmentForm.value).subscribe(
      (response) => {
        console.log('Appointment created successfully:', response);
      },
      (error) => {
        console.error('Error creating appointment:', error);
      }
    );
  }

}
