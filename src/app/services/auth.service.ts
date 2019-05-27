import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
const url = environment.url;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url:string = `${url}/user/createUsers`;
  token;

  constructor(private http:HttpClient) { }


  getHttpOp(){
    if(JSON.parse(localStorage.getItem('access_token'))){
      this.token = JSON.parse(localStorage.getItem('access_token'))[1];
    }else{
      this.token =  "ieghknty";
    }
    
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth' : this.token
      })
    }

  }

  // Signup
  signup(user:User) {
    console.log(`${user.name}  ${user.password}  ${user.premium}`)
    return this.http.post<User>(this.Url, user, this.getHttpOp())
  }

  login(user): Observable<any>{
    console.log(`${user.name}  ${user.password}`)
    return this.http.post(`${url}/user/login`, user, this.getHttpOp())
    
  }
}
 