import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router) {
  }
   name:string;
   email:string;
   password:string;
   cpassword:string;

  ngOnInit() {
  }

  Signup() {
    const user:User= {
      name: this.name,
      email: this.email,
      password: this.password,
      premium: false
    }
    this.auth.signup(user).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('login');
    });
  }
}
