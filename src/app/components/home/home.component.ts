import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = 'app';
lat: number = 7.8731;
lng: number = 80.7718;

  constructor() { }

  ngOnInit() {
  }

}
