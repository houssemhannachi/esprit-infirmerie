import {Injectable} from '@angular/core';
import {UserData} from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGGED_USER = "LOGGED_USER";

  saveLoggedUser(userData: UserData) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(this.LOGGED_USER, JSON.stringify(userData));
    }
  }

  disconnect() {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
  }

  getUserTokens() {
    if (typeof window !== "undefined") {
      const loggedUser = window.localStorage.getItem(this.LOGGED_USER);
      return loggedUser ? JSON.parse(loggedUser) : null;
    }
  }

  isUserLoggedIn(): boolean {
    return this.getUserTokens() != null;
  }
}
