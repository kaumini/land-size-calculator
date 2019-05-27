import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from './../../environments/environment';
const url = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
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

  //payment
  pay(obj, uid){
    console.log(obj);
    return this.http.post(`${url}/payment/buy`, { token : obj.token.id , uid }, this.getHttpOp())

  }
}
