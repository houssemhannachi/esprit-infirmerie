import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {CommonModule} from '@angular/common';
import {AppointmentService} from '../../../core/services/appointment.service';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MedicineService} from '../../../core/services/medicine.service';
import {Medicine} from '../../models/Medicine';
import {Prescription, PrescriptionService} from '../../../core/services/prescription.service';

@Component({
  selector: 'app-prescription-form',
  imports: [ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    FormsModule,
    CommonModule],
  templateUrl: './prescription-form.component.html',
  styleUrl: './prescription-form.component.css'
})
export class PrescriptionFormComponent implements OnInit {

  prescriptionForm: FormGroup;
  medicineList: Medicine[] = [];
  selectedMedicines: any[] = [];
  private patientId: number = 0;
  private savedPrescription: Prescription | null = null;


  constructor(private fb: FormBuilder,
              private prescriptionService: PrescriptionService,
              private appointmentService: AppointmentService,
              private medicineService: MedicineService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    appointmentService.getUserByAppointmentId(this.route.snapshot.params["appointmentId"]).subscribe(value => this.patientId = value.id)
    medicineService.getMedicines().subscribe(value => this.medicineList = value);
    this.prescriptionForm = this.fb.group({
      appointmentId: [''],
      medicines: ['', Validators.required],
      remarks: ['']
    });

  }

  ngOnInit() {
    this.prescriptionService.getPrescriptionByAppointmentId(this.route.snapshot.params["appointmentId"]).subscribe(value => {
      if (value != null && value.id != null) {
        this.savedPrescription = value;
        this.prescriptionForm.patchValue(value);
        this.selectedMedicines = value.medicines || []; // Ensure medicines are loaded
        this.prescriptionForm.disable(); // Disable the form if a prescription is already saved
      }
    });
  }

  isMedicineSelected(medicine: Medicine): boolean {
    return this.selectedMedicines.some(selected => selected.id === medicine.id);
  }

  isFormDisabled(): boolean {
    return this.savedPrescription != null && this.savedPrescription.id != null;
  }

  createPrescription() {
    if (this.isFormDisabled()) {
      console.warn('Cannot create a prescription when a saved one already exists.');
      return;
    }

    this.prescriptionForm.patchValue({appointmentId: this.route.snapshot.params["appointmentId"]});

    this.prescriptionService.createPrescription(this.prescriptionForm.value).subscribe(
      (response) => {
        this.router.navigate(['user/display-appointments']);
      },
      (error) => {
        console.error('Error creating appointment:', error);
      }
    );
  }

  onMedicineChange(event: any, medicine: any): void {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedMedicines.push(medicine);
    } else {
      this.selectedMedicines = this.selectedMedicines.filter(
        (m) => m.id !== medicine.id
      );
    }

    // Update the form control value
    this.prescriptionForm.patchValue({medicines: this.selectedMedicines});
  }

  goTo() {
    this.router.navigate(['/user/add-medicine']);
  }

  medicalRecord() {
    console.log(this.patientId);
    this.router.navigate(['/user/medical-record/' + this.patientId])
  }


}
