import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http'

let token;

if(JSON.parse(localStorage.getItem('access_token'))){
  token = JSON.parse(localStorage.getItem('access_token'))[1];
}else{
  token =  "sncj";
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth' : token
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url:string = "http://localhost:3000/user/createUsers";

  constructor(private http:HttpClient) { }

  // Signup
  signup(user:User) {
    console.log(`${user.name}  ${user.password}  ${user.premium}`)
    return this.http.post<User>(this.Url, user, httpOptions)
  }

  login(user) {
    console.log(`${user.name}  ${user.password}`)
    return this.http.post("http://localhost:3000/user/login", user, httpOptions)
    
  }
}
 