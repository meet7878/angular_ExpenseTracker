import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenServiceService } from '../auth-token-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authTokenService:AuthTokenServiceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.authTokenService.authToken = "" 
    this.router.navigateByUrl("/login")
    this.toastr.success("Tame Logout Thai gaya cho...")
  }

}
