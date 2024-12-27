import {ChangeDetectorRef, Component} from '@angular/core';
import {MakeAppointmentComponent} from '../make-appointment/make-appointment.component';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-left-side-bar',
  imports: [CommonModule],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {
  userRole: string;
  username: any;

  constructor(private router: Router, private authService: AuthService) {
    this.userRole = authService.getUserRole();
    this.username = this.authService.getLoggedUser().username;
  }

  onButtonClick(buttonLabel: string): void {
    this.router.navigate([`/user/${buttonLabel}`])
  }
}
