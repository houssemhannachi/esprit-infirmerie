import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/User';


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

  login(user: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(this.apiUrl + "/login", user);
  }
}
