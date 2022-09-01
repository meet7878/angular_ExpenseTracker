import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUSerComponent implements OnInit {

  userForm: FormGroup
  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8),this.strongPassword])
   })
  }
  ngOnInit(): void {

  } 


  addUser() {
   // alert("done")
     //console.log(this.userForm.value);
      // console.log(this.userForm.valid);
    // if(this.userForm.valid){
      //rest api 
    // }
}


//
strongPassword(password: AbstractControl): ValidationErrors | null {
  let isUpper = false
  let isLower = false
  let isSpecial = false
  let isDigit = false
  let passwordValue = password.value as string

  if (passwordValue.length < 8)
    return null

  for (let i = 0; i < passwordValue.length; i++) {
    if (passwordValue.charAt(i) >= 'A' && passwordValue.charAt(i) <= 'Z') {
      isUpper = true
    } else if (passwordValue.charAt(i) >= 'a' && passwordValue.charAt(i) <= 'z') {
      isLower = true
    }
    else if (passwordValue.charAt(i) == '$' || passwordValue.charAt(i) == '#' || passwordValue.charAt(i) == '@') {
      isSpecial = true
    }
    else if (passwordValue.charAt(i) >= '0' && passwordValue.charAt(i) <= '9') {
      isDigit = true
    }
  }

  if (isLower && isUpper && isSpecial && isDigit)
    return null
  else
    return { "strongPassword": true }
  // return null;//no errors 
}
}
