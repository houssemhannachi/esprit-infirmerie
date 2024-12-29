import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/User';
import {UserData} from '../../shared/auth/userData';


interface UserLogin {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/server/auth';

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + "/signup", user);
  }

  login(user: UserLogin): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl + "/login", user);
  }


  getUserById(userId: any): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }
}
