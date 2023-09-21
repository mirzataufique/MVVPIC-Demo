import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, UntypedFormControl,ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

  constructor(private _fb : UntypedFormBuilder) { }
dynamicForm:  UntypedFormGroup
  ngOnInit(): void {
    this.dynamicForm = this._fb.group({
      fullname: this._fb.array([this.createFieldGroup()])
    })
 
  }
  addMore(){
    alert("add")
    const fullname = this.dynamicForm.get('fullname') as UntypedFormArray;
    fullname.push(this.createFieldGroup())
  }

createFieldGroup() : UntypedFormGroup{
return new UntypedFormGroup({
  fullname: new UntypedFormControl('')
})
  
}
}
