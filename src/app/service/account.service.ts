import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getAccountByUser(userId:string):Observable<any>{
      return this.httpClient.get(environment.url+"user/account/"+userId)
  }

  addBalance(account:any):Observable<any>{
    return this.httpClient.put(environment.url+"user/account",account)
  }
}
