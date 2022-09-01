import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // firstName ="royal"
  roles: Array<any> = []
  roleName:string="" 
  display=false

  constructor(private userservice:UserService,private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRoles()
    
    }

    getAllRoles() {
      this.userservice.getAllRoles().subscribe(resp => {
        console.log("get all roles.....")
        console.log(resp);
       this.roles = resp
        
    })

  }

  deleteRole(id:any){
   // console.log("delete role called....."+id)  
   this.userservice.deleteRole(id).subscribe(resp => {
    this.toastr.success("Role Deleted...")
    //this.getAllRoles();
     this.roles = this.roles.filter(r => r.roleId != id)

     //roles -> 17
     // let newRoles=[] 
     // for(let i=0;i<this.roles.length;i++){
     //   if(this.roles[i].roleId != id){
     //     newRoles.push(this.roles[i]);
     //   }
     // }
     // this.roles = newRoles 


   }, err => {
    console.log(err);
    this.toastr.error(err);
  
  })

}

viewRole(roleId:any){
  this.userservice.getRoleByIdApi(roleId).subscribe(resp=>{
    alert(resp.roleName)
    this.roleName = resp.roleName

    this.display=true 
     
  },err=>{
    this.toastr.error(err)
  })
}





}