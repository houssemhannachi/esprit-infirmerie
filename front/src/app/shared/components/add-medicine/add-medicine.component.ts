import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {UserComponent} from '../user/user.component';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {CommonModule} from '@angular/common';
import {SpecialistService} from '../../../core/services/specialist.service';

@Component({
  selector: 'app-add-medicine',
  imports: [ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LeftSideBarComponent,
    FormsModule,
    CommonModule],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
  medicineForm: FormGroup;
  userRole: string;

  constructor(private fb: FormBuilder,
              private specialistService: SpecialistService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    this.userRole = this.authService.getUserRole();
    this.medicineForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [0, Validators.required],
    });
  }

  addMedicine() {
    this.specialistService.addMedicine(this.medicineForm.value).subscribe(
      (response) => {
        console.log('Medicine created successfully:', response);
        this.router.navigate(['user/display-appointments']);

      },
      (error) => {
        console.error('Error creating appointment:', error);
      }
    );
  }

}
