import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private userService: UserService,private toastr:ToastrService,private route:Router) { }
  roleName:String = ""

  ngOnInit(): void {
  }

  addRole() {
    let role = { "roleName": this.roleName }
    this.userService.addRole(role).subscribe(resp => {
     this.toastr.success("Role Added");
    this.route.navigateByUrl("/user/home")
      console.log(resp);
      
    })
  }

}
