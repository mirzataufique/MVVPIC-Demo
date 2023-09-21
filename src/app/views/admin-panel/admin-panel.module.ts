import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { FltreportComponent} from './fltreport/fltreport.component';
import { StdreportComponent} from './stdreport/stdreport.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';

console.log("Admin============>");

@NgModule({
  declarations: [LoginComponent,RegisterComponent,FltreportComponent,StdreportComponent,NewAdmissionComponent], 
  imports: [
    CommonModule,
    RouterModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ]
})
export class AdminPanelModule { }
