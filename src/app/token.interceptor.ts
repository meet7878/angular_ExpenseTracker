import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class  TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("token interceptor............");
    let authToken = localStorage.getItem("authToken") as string
   
       //const modifiedReq = request.clone({headers:request.headers.set("authToken",authToken)})    
        //console.log(modifiedReq.headers);
        return next.handle(request.clone({ setHeaders: { authToken } })); // go forward with header 
 // return  next.handle(modifiedReq);
      }
}   
