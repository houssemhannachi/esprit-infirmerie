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
import {PrescriptionService} from '../../../core/services/prescription.service';
import {Appointment} from '../../models/Appointment';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-medical-record',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent, LeftSideBarComponent],
  templateUrl: './medical-record.component.html',
  styleUrl: './medical-record.component.css'
})
export class MedicalRecordComponent implements OnInit {
  patientId: any;
  appointments: Appointment[] = [];
  patient: any;
  medicalRecordForm: any;
  medicalRecord: any;
  username: any;
  user: any;


  constructor(private authService: AuthService, private prescriptionService: PrescriptionService, private specialistService: SpecialistService, private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private appointmentService: AppointmentService) {
    this.medicalRecordForm = this.fb.group({
      id: '',
      age: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      allergies: [''],
      bloodType: ['', [Validators.required]],
      assurancePersonName: ['']
    });
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getAppointmentsByPatientId(this.patientId);
    this.getPatientById(this.patientId);
    this.username = authService.getUsername();
    this.getUserByUsername(this.username)
    this.getMedicalRecordByPatientId(this.patientId);
  }

  ngOnInit(): void {
  }

  getAppointmentsByPatientId(patientId: any) {
    this.appointmentService.getAppointmentsByPatientId(patientId).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
        this.appointments.forEach((appointment) => {
          this.prescriptionService.getPrescriptionByAppointmentId(appointment.id).subscribe({
            next: (prescriptions) => {
              appointment.prescription = prescriptions;
            },
            error: (err) => {
              console.error(`Error fetching prescriptions for appointment ${appointment.id}:`, err);
            }
          });
        });
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
      }
    });
  }


  getPatientById(userId: any) {
    this.userService.getUserById(userId).subscribe({
      next: (data) => {
        this.patient = data;
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

  getUserByUsername(username: any) {
    this.specialistService.getUserByUsername(username).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }
}
