import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicine} from '../../shared/models/Medicine';

export interface Prescription {
  id: number,
  medicines: Medicine[],
  remarks: string
}

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private apiUrl = '/server/prescription';

  constructor(private http: HttpClient) {
  }

  createPrescription(prescription: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(this.apiUrl, prescription);
  }

  getPrescriptionByAppointmentId(id: number): Observable<Prescription> {
    return this.http.get<Prescription>(this.apiUrl + "/appointment/" + id);
  }
}
