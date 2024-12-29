import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicine} from '../../shared/models/Medicine';
import {MedicalRecord} from '../../shared/models/MedicalRecord';
import {Appointment} from '../../shared/models/Appointment';
import {User} from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private medicineApiUrl = '/server/medicine';
  private medicalRecordUrl = '/server/medical-record';
  private userUrl = '/server/users';

  constructor(private http: HttpClient) {
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.medicineApiUrl, medicine);
  }

  addMedicalRecord(patientId: any, medicalRecord: MedicalRecord): Observable<MedicalRecord> {
    const url = `${this.medicalRecordUrl}/${patientId}`;
    return this.http.post<MedicalRecord>(url, medicalRecord);
  }

  getMedicalRecordByPatientId(userId: any) {
    return this.http.get<MedicalRecord>(`${this.medicalRecordUrl}/patient-id/${userId}`);


  }

  getUserByUsername(username: any): Observable<User> {
    const url = `${this.userUrl}/${username}`;
    return this.http.get<User>(url);
  }

}
