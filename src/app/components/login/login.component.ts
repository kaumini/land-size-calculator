import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  name:string;
  password:string;

  ngOnInit() {
  }

  Login() {
  
    this.auth.signup(user).subscribe(data => {
      console.log(data)
    });
  }

}
