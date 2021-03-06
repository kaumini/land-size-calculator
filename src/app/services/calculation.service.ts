import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../../environments/environment';
const url = environment.url;




@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  token;

  constructor(private http:HttpClient) { 
    
  }

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
  save(cal) {
    // console.log(`${user.name}  ${user.password}  ${user.premium}`)
    return this.http.post(`${url}/calculation/saveCalculation`, cal, this.getHttpOp());
  }

  getCal(uid){
    return this.http.get(`${url}/calculation/getCalculations`,this.getHttpOp());
  }
}
