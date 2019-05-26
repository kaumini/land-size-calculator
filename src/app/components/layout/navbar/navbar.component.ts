import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  token = JSON.parse(localStorage.getItem('access_token'));
  ispremium = this.token[2].premium;

  constructor() { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('tries');
  }

}
