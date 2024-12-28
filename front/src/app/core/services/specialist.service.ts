import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicine} from '../../shared/models/Medicine';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private medicineApiUrl = '/server/medicine';

  constructor(private http: HttpClient) {
  }

  addMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.medicineApiUrl, medicine);
  }
}
