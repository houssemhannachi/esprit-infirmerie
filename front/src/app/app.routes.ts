import {Routes} from '@angular/router';
import {RegisterComponent} from './shared/components/register/register.component';
import {LoginComponent} from './shared/components/login/login.component';
import {UserComponent} from './shared/components/user/user.component';
import {MakeAppointmentComponent} from './shared/components/make-appointment/make-appointment.component';
import {AppointmentListComponent} from './shared/components/appointment-list/appointment-list.component';
import {AuthGuard} from './shared/auth/guard/auth.guard';
import {DisplayAppointmentsComponent} from './shared/components/display-appointments/display-appointments.component';
import {AddMedicineComponent} from './shared/components/add-medicine/add-medicine.component';
import {PrescriptionFormComponent} from './shared/components/prescription-form/prescription-form.component';
import {MedicalRecordComponent} from './shared/components/medical-record/medical-record.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'user/make-appointment', component: MakeAppointmentComponent, canActivate: [AuthGuard]},
  {path: 'user/appointments', component: AppointmentListComponent, canActivate: [AuthGuard]},
  {path: 'user/display-appointments', component: DisplayAppointmentsComponent, canActivate: [AuthGuard]},
  {path: 'user/add-medicine', component: AddMedicineComponent, canActivate: [AuthGuard]},
  {path: 'prescription/:appointmentId', component: PrescriptionFormComponent, canActivate: [AuthGuard]},
  {path: 'user/medical-record/:id', component: MedicalRecordComponent}

];
