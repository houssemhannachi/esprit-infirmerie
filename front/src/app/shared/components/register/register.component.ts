import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {WelcomeComponent} from '../welcome/welcome.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [FormsModule, HeaderComponent, FooterComponent, WelcomeComponent]
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
