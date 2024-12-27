import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-left-side-bar',
  imports: [],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {
  username: any;

  constructor(private router: Router, private authService: AuthService) {
    this.username = this.authService.getLoggedUser().username;
  }

  onButtonClick(buttonLabel: string): void {
    this.router.navigate([`/user/${buttonLabel}`])
  }
}
