import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Appointment } from '../../shared/models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = '/server/appointments';

  constructor(private http: HttpClient) { }
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }
}
