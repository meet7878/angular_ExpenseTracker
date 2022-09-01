import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenServiceService } from '../auth-token-service.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private sessionservicer :SessionService,private toster:ToastrService,private router :Router,private authTokenService: AuthTokenServiceService ) { }

  ngOnInit(): void { }

  login() {
   let user={"email" : this.email,
  "password" : this.password}

  this.sessionservicer.loginApi(user).subscribe(resp =>{
    //json
    console.log(resp.data)
    // let authToken = resp.data.user.authToken
    this.toster.success("Login done")
    
    let authToken = resp.data.authToken
    localStorage.setItem("userId",resp.data.userId)
    localStorage.setItem("email",resp.data.email)
    localStorage.setItem("firstName",resp.data.firstName)
    localStorage.setItem("authToken", authToken)
    
    this.authTokenService.authToken =  authToken

    if(resp.data.role.roleName == 'user'){
          this.router.navigateByUrl("/user/home")
    }else if(resp.data.role.roleNme == 'admin'){
      this.router.navigateByUrl("/dashboard")  
    }

  },err =>{ 
    console.log("jigar..................."+err)
    this.toster.error("please try again","401")

  })

  }
  //@Transactional

}
