import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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
    return this.http.get('http://localhost:3000/calculation/getCalculations', uid);
  }
  
  updateTries(tries){
    return this.http.post('http://localhost:3000/calculation/updateTries', tries, httpOptions);
  }
}
