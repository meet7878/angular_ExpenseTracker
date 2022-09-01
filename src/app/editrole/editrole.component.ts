import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute,private userService:UserService,private toastr:ToastrService,private router:Router) { }
  roleId = 0
  roleName = ""
  ngOnInit(): void {
    this.roleId = this.aRoute.snapshot.params["roleId"]
    this.getRoleById()

  }

  getRoleById(){
    this.userService.getRoleByIdApi(this.roleId).subscribe(resp=>{
      console.log(resp);
      
      this.roleName = resp.roleName;
    })
  }

  updateRole(){
    let role = {"roleId":this.roleId,"roleName":this.roleName}
    this.userService.updateRole(role).subscribe(resp=>{
      this.toastr.success("Role modified...")
      this.router.navigateByUrl("/user/home")

    }) 
  }


}
