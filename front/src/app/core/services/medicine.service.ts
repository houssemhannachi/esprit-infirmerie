import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicine} from '../../shared/models/Medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = '/server/medicine';

  constructor(private http: HttpClient) {
  }

  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiUrl+"/all");
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.apiUrl, medicine);
  }
}
