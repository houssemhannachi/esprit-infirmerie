import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {UserService} from '../../../core/services/user.service';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [FormsModule, HeaderComponent, FooterComponent, WelcomeComponent, RouterModule, ReactiveFormsModule]
})
export class RegisterComponent {
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    this.registerFrom = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      occupation: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerFrom: FormGroup;

  onSubmit() {
    console.log(this.registerFrom.value);

    this.userService.createUser(this.registerFrom.value).pipe().subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error) => {
        console.log("here");
        console.log(error);
      }
    })
  }
}
