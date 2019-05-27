import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }
  name:string;
  password:string;

  ngOnInit() {
  }

  Login() {
    const user= {
      name: this.name,
      password: this.password
    }
    this.auth.login(user).subscribe(
      data => {
      // login successful redirect to home
        var data1= JSON.stringify(data);
        var token = JSON.parse(data1).msg;
        var tries = JSON.parse(data1).tries;
        localStorage.removeItem('access_token');
        localStorage.removeItem('tries');
        localStorage.setItem('access_token', JSON.stringify(token));
        localStorage.setItem('tries', JSON.stringify(tries));
        this.router.navigateByUrl('home');
        
      },
      error => {
        console.log(error);
        this.router.navigated = false;
        alert("invalid username or password");
        // login failed so display error
        
      }
    );
  }
        

        

  
  //   this.auth.signup(user).subscribe(data => {
  //     console.log(data)
  //   });
  // }
  

}
