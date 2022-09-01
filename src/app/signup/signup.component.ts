import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: String = ""
  email: String = ""
  password: String = ""

  constructor(private tsService: ToastrService, private router: Router, private sessionservice: SessionService) {
  
  }

  signup() {
    console.log(this.firstName)
    console.log(this.email);
    console.log(this.password);
    //validate
    let user = {
      "firstName": this.firstName,
      "email": this.email,
      "password": this.password,
      "gender": "male",
    }
    this.sessionservice.signupApi(user).subscribe(res => {
      if (res) {
        this.tsService.success("Signup ", "", { timeOut: 3000 });
        this.router.navigateByUrl("/login")
      }

    })


    //db


  }
}