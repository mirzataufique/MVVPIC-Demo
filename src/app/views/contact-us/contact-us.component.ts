import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  questionForm : FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.questionForm =  new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      mobile: new FormControl(''),
      message : new FormControl('')
    })
  }
  lat = 28.704060;
  long = 77.102493;
  googleMapType = 'satellite';
  onSubmit(){
 console.log(this.questionForm.value)

  }
}