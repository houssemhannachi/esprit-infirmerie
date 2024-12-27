import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../../shared/models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = '/server/appointments';

  constructor(private http: HttpClient) {
  }

  getAppointments(username: string): Observable<Appointment[]> {
    const params = new HttpParams().set('username', username);
    return this.http.get<Appointment[]>(this.apiUrl,{params});
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }
}
