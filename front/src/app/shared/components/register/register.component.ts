import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
    templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [FormsModule]
})
export class RegisterComponent {
  formData = {
    nom: '',
    prenom: '',
    username: '',
    userType: '',
    mail: '',
    password: ''
  };

  onSubmit() {
    console.log(this.formData);
  }
}
