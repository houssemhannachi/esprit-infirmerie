import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {AuthService} from '../../auth/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HeaderComponent, FooterComponent, WelcomeComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage:any;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
    this.loginFrom = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginFrom: FormGroup;

  onSubmit() {
    console.log(this.loginFrom.value);

    this.userService.login(this.loginFrom.value).pipe().subscribe({
      next: (userData) => {
        this.authService.saveLoggedUser(userData)
        this.router.navigate(['/user']);
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        } else {
          this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
        }
      }
    })
  }

  redirectToSignUp(): void {
    this.router.navigate(['/register']);
  }

}
