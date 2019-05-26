import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

let token;

if(JSON.parse(localStorage.getItem('access_token'))){
  token = JSON.parse(localStorage.getItem('access_token'))[1];
}else{
  token =  "ieghknty";
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
export class CalculationService {

  constructor(private http:HttpClient) { }
  
  // Signup
  save(cal) {
    // console.log(`${user.name}  ${user.password}  ${user.premium}`)
    return this.http.post('http://localhost:3000/calculation/saveCalculation', cal, httpOptions)
  }

  getCal(uid){
    return this.http.get('http://localhost:3000/calculation/getCalculations',httpOptions);
  }
}
