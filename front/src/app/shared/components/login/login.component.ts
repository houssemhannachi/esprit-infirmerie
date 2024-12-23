import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [WelcomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
  }

  redirectToSignIn(): void {
    console.log("ha")
    this.router.navigate(['/register']);
  }

}
