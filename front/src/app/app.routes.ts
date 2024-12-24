import {Routes} from '@angular/router';
import {RegisterComponent} from './shared/components/register/register.component';
import {LoginComponent} from './shared/components/login/login.component';
import {UserComponent} from './shared/components/user/user.component';
import {MakeAppointmentComponent} from './shared/components/make-appointment/make-appointment.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/make-appointment', component: MakeAppointmentComponent}
];
