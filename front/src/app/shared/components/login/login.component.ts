import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WelcomeComponent} from '../welcome/welcome.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HeaderComponent, FooterComponent, WelcomeComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    this.loginFrom = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginFrom: FormGroup;

  onSubmit() {
    console.log(this.loginFrom.value);

    this.userService.login(this.loginFrom.value).pipe().subscribe({
      next: () => {
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  redirectToSignUp(): void {
    this.router.navigate(['/register']);
  }

}
