import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {AppointmentService} from '../../../core/services/appointment.service';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import {CommonModule} from '@angular/common';
import {UserService} from '../../../core/services/user.service';
import {SpecialistService} from '../../../core/services/specialist.service';

@Component({
  selector: 'app-medical-record',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent, LeftSideBarComponent],
  templateUrl: './medical-record.component.html',
  styleUrl: './medical-record.component.css'
})
export class MedicalRecordComponent implements OnInit {
  patientId: any;
  appointments: any;
  user: any;
  medicalRecordForm: any;
  medicalRecord: any;

  constructor(private specialistService: SpecialistService, private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private appointmentService: AppointmentService) {
    this.medicalRecordForm = this.fb.group({
      id: '',
      age: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      allergies: [''],
      bloodType: ['', [Validators.required]],
      assurancePersonName: ['']
    });
  }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getAppointmentsByPatientId(this.patientId);
    this.getUserById(this.patientId);
    this.getMedicalRecordByPatientId(this.patientId);
  }

  getAppointmentsByPatientId(patientId: any) {
    this.appointmentService.getAppointmentsByPatientId(patientId).subscribe({
      next: (data) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
      }
    });
  }

  getUserById(userId: any) {
    this.userService.getUserById(userId).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }

  saveMedicalRecord() {
    this.specialistService.addMedicalRecord(this.patientId, this.medicalRecordForm.value).pipe().subscribe({
      next: (userData) => {
        alert("Vous avez modifié avec succès.")
        this.getMedicalRecordByPatientId(this.patientId)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getMedicalRecordByPatientId(userId: any) {
    this.specialistService.getMedicalRecordByPatientId(userId).subscribe({
      next: (data) => {
        this.medicalRecord = data;
        if (this.medicalRecord) {
          this.medicalRecordForm.patchValue({
            id: this.medicalRecord.id,
            age: this.medicalRecord.age,
            weight: this.medicalRecord.weight,
            height: this.medicalRecord.height,
            allergies: this.medicalRecord.allergies,
            bloodType: this.medicalRecord.bloodType,
            assurancePersonName: this.medicalRecord.assurancePersonName
          });
        }
      },
      error: (err) => {
        console.error('Error fetching medical record:', err);
      }
    });
  }

}
