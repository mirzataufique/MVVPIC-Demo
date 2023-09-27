import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from '../../Services/auth.service'

import { FltreportComponent } from './fltreport/fltreport.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StdreportComponent } from './stdreport/stdreport.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';



const routes: Routes = [
  {
    path: 'fcltreport',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: FltreportComponent
  }, {
    path: 'login',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: LoginComponent
  }, {
    path: 'report',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: StdreportComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admission',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: NewAdmissionComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: DashboardComponent
  },
  {
    path: 'add-faculty',
    canActivate: [AuthService],
    data: ['ADMIN'],
    component: FacultyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
