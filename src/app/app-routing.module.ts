import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { AuthTokenGuard } from './auth-token.guard';
import { LogoutComponent } from './logout/logout.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { EditroleComponent } from './editrole/editrole.component';
import { AddUSerComponent } from './add-user/add-user.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';

const routes: Routes = [
  //{path:"",redirectTo:"/login",pathMatch:"full"},
  
 {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  //{component:HomeComponent,path:"home"},
  //{component:AddRoleComponent,path:"addrole"},
  //{component:ViewroleComponent,path:"viewrole/:roleId"},
   {component:LogoutComponent,path:"logout"},
  // {component: LoginComponent, path: "" },
  {component:LoginComponent,path:""},


   { 
    component: UserlayoutComponent,path:"user", children: [
    {component:HomeComponent,path:"home"},
    {component:AddRoleComponent,path:"addrole"},
    {component:ViewroleComponent,path:"viewrole/:roleId"},
    {component:EditroleComponent,path:"editrole/:roleId"},
    {component:AddUSerComponent,path:"adduser"},
    { component: ListAccountComponent, path: "myaccounts" },
    { component: AddPaymentComponent, path: "addpayment/:accountId" }
],canActivate: [AuthTokenGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
