import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainControllerService } from 'src/app/Services/mainController.service';

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent implements OnInit {

  addmissionForm: FormGroup;

  public isDisable = false;
  public successMsg: boolean = false;
  public errorMsg: boolean = false;
  msg!: string;

  formData: any[];
  constructor(private _mainService: MainControllerService, public router: Router) { }

  ngOnInit(): void {
    this.addmissionForm = new FormGroup({
      std_name: new FormControl(null, Validators.required),
      std_father: new FormControl(null, Validators.email),
      std_mother: new FormControl(null, Validators.required),
      std_dob: new FormControl(null, Validators.required),
      std_department: new FormControl(null, Validators.required),
      std_mobile: new FormControl(null, Validators.required),
      std_address: new FormControl(null, Validators.required),
      std_email: new FormControl(null, Validators.required)
    })
  }


  onSubmit() {
    console.log("save student clicked",this.addmissionForm);
    this._mainService.addStudent(this.addmissionForm.value).subscribe((result) => {
      console.log('result', result);
      this.msg = result.message;
      this.errorMsg = false;
      this.successMsg = true;
      this.router.navigate(['/report'])
    }, (error) => {
      console.log('An unexpected error ', error.error.message);
      this.msg = error.error.message;
      this.successMsg = false;
      this.errorMsg = true;
      // this.router.navigate(['/report']);
    }, () => {
      console.log('Completed');
    });
    // this.router.navigate(['/report'])
  }
}
