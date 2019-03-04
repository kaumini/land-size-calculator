import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService) {
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
      console.log(data)
    });
  }
}
