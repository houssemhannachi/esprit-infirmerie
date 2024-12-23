import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {LoginComponent} from './shared/components/login/login.component';
import {RegisterComponent} from './shared/components/register/register.component';
import {LeftSideBarComponent} from './shared/components/left-side-bar/left-side-bar.component';
import {WelcomeComponent} from './shared/components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  imports: [WelcomeComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoginComponent, RegisterComponent, LeftSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
