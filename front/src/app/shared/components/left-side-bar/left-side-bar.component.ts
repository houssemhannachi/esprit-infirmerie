import {Component} from '@angular/core';
import {MakeAppointmentComponent} from '../make-appointment/make-appointment.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left-side-bar',
  imports: [MakeAppointmentComponent],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {

  constructor(private router: Router) {
  }

  onButtonClick(buttonLabel: string): void {
    this.router.navigate([`/user/${buttonLabel}`])
  }
}
