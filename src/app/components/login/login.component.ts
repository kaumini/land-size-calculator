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
    const user= {
      name: this.name,
      password: this.password
    }
    this.auth.login(user).subscribe(data => {
      console.log(data)
    });
  }
        

        

  
  //   this.auth.signup(user).subscribe(data => {
  //     console.log(data)
  //   });
  // }
  

}
