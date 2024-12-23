import {Routes} from '@angular/router';
import {RegisterComponent} from './shared/components/register/register.component';
import {LoginComponent} from './shared/components/login/login.component';
import {UserComponent} from './shared/components/user/user.component';
import {WelcomeComponent} from './shared/components/welcome/welcome.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent}
];
;
