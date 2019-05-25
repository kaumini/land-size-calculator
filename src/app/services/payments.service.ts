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
export class PaymentsService {

  constructor(private http:HttpClient) { }

  //payment
  pay(obj, uid){
    console.log(obj);
    return this.http.post('http://localhost:3000/payment/buy', { token : obj.token.id , uid }, httpOptions)

  }
}
