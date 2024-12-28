import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppointmentService} from '../../../core/services/appointment.service';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {UserComponent} from '../user/user.component';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-medecine',
  imports: [ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LeftSideBarComponent,
    FormsModule,
    CommonModule],
  templateUrl: './add-medecine.component.html',
  styleUrl: './add-medecine.component.css'
})
export class AddMedecineComponent {
  appointmentForm: FormGroup;
  userRole: string;
  todayDate: string;
  constructor(private fb: FormBuilder,
              private appointmentService: AppointmentService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    const today = new Date();
    this.todayDate = today.toISOString().split('T')[0];
    this.userRole = this.authService.getUserRole();
    this.appointmentForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      grade: [''],
      occupation: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['', Validators.required],
    });
  }

  createAppointment() {
    this.appointmentForm.value.username = this.authService.getLoggedUser().username;
    this.appointmentService.createAppointment(this.appointmentForm.value).subscribe(
      (response) => {
        console.log('Appointment created successfully:', response);
        this.router.navigate(['user/appointments']);
      },
      (error) => {
        console.error('Error creating appointment:', error);
      }
    );
  }

}
