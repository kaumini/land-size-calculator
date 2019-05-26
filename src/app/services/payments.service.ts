import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

let token;

if(JSON.parse(localStorage.getItem('access_token'))){
  token = JSON.parse(localStorage.getItem('access_token'))[1];
}else{
  token =  "knthkn";
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
export class PaymentsService {

  constructor(private http:HttpClient) { }

  //payment
  pay(obj, uid){
    console.log(obj);
    return this.http.post('http://localhost:3000/payment/buy', { token : obj.token.id , uid }, httpOptions)

  }
}
