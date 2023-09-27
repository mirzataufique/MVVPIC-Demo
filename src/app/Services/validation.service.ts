import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  onlyNumber(input) {
    if (input.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(input.match(/0{5,}/))) {
      return true;
    } else {
      return false;
    }
  }

  emailValidation(input) {
    console.log(input);
    
    if (this.emailRegex.test(input)) {
      return false;
    } else{
      return true;
    }
  }
}
