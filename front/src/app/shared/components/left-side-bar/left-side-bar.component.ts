import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {CommonModule} from '@angular/common';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../models/User';
import {SpecialistService} from '../../../core/services/specialist.service';

@Component({
  selector: 'app-left-side-bar',
  imports: [CommonModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {
  userRole: string;
  username: any;
  user: any;

  constructor(private router: Router, private authService: AuthService, private specialistService: SpecialistService) {
    this.userRole = authService.getUserRole();
    this.username = authService.getUsername();
    this.getUserByUsername(this.username)
  }

  onButtonClick(buttonLabel: string): void {
    this.router.navigate([`/user/${buttonLabel}`])
  }

  getUserByUsername(username: any) {
    this.specialistService.getUserByUsername(username).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });
  }

  toMedicalRecord(buttonLabel: string) {
    console.log(this.user)
    this.router.navigate([`/user/${buttonLabel}` + this.user.id])
  }
}
