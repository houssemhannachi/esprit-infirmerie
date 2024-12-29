import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from '../../shared/models/Appointment';
import {User} from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = '/server/appointments';

  constructor(private http: HttpClient) {
  }

  getAppointments(username: string): Observable<Appointment[]> {
    const params = new HttpParams().set('username', username);
    return this.http.get<Appointment[]>(this.apiUrl, {params});
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

  updateAppointment(id: number, username: string): Observable<any> {
    const url = `${this.apiUrl}/update-appointment/${id}`;

    // Prepare the query parameters for username and role
    const params = new HttpParams()
      .set('username', username)

    // Make the POST request to the backend
    return this.http.post(url, {}, {params});
  }

  getAppointmentsByPatientId(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/patient-id/${patientId}`);
  }
  getUserByAppointmentId(appointmentId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${appointmentId}`);
  }
}
