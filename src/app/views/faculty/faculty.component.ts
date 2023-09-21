import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.facultyForm = new FormGroup({
      faName: new FormControl(),
      faFather: new FormControl(),
      faMother: new FormControl(),
      faDob: new FormControl(),
      faDepartment: new FormControl(),
      faMobile: new FormControl(),
      faEmail: new FormControl(),
      faAddress: new FormControl(),
    })
  }
  onSubmit(){

  }
}
