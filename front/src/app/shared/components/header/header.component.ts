import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService,private router:Router) {
  }

  disconnect() {
    this.authService.disconnect()
    this.router.navigate([''])
  }

  isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }
}
