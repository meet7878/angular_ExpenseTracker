import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthTokenServiceService } from './auth-token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuard implements CanActivate {

  constructor(private router:Router,private authTokenService:AuthTokenServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("authtokenGurd called.............")
    console.log("your token is => "+this.authTokenService.authToken);
      
      console.log(this.authTokenService.authToken == undefined);
      console.log(this.authTokenService.authToken == "");
      console.log(this.authTokenService.authToken.trim.length == 0 );
      console.log(this.authTokenService.authToken);
      console.log(this.authTokenService.authToken.trim.length);
    
    if(this.authTokenService.authToken == undefined || this.authTokenService.authToken == "" || this.authTokenService.authToken.length == 0 ){
      console.log("i m inside false");
      this.router.navigateByUrl("/login")
      return false;
  }      
  return true;
}
    
  }
  

