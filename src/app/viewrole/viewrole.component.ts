import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute,private userService:UserService,private toastr:ToastrService) { }
  roleId = -1
  roleName:string=""

  ngOnInit(): void {
    this.roleId =this.aRoute.snapshot.params["roleId"];
    console.log(this.roleId);
    this.getRoleById(this.roleId)
  }

  getRoleById(id:any){
    this.userService.getRoleByIdApi(id).subscribe(resp=>{
        this.roleName = resp.roleName
    },err=>{
      this.toastr.error("Invalid RoleId")
    })
  }

}
