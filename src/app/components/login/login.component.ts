import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

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
        var token = data;
        console.log(data);
        this.router.navigateByUrl('home');
        
      },
      error => {
        console.log(error);
        this.router.navigated = false;
        // login failed so display error
        
      }
    );
  }
        

        

  
  //   this.auth.signup(user).subscribe(data => {
  //     console.log(data)
  //   });
  // }
  

}
