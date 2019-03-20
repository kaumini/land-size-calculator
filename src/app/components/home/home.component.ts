import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Point } from '../../models/Point';
import { Marker } from '../../models/marker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = 'app';
lat: number = 7.8731;
lng: number = 80.7718;


  constructor() { 
    // var map;
    // var p:Point = {
    //   lat: 1.5,
    //   lng: 2.5
    // }
    // var points: any[] = [];
    // points.push(p);
  }

  ngOnInit() {
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.markers.push(
      {
        lat: $event.coords.lat,
        lng: $event.coords.lng
      }
    );
    this.paths.push(
      {
        lat: $event.coords.lat,
        lng: $event.coords.lng
      }
    );
    console.log(this.markers);
    console.log(this.paths);
  }
  
  markers: Marker[] = [
  ]
  paths: Array<Marker> = [
         { lat: 10, lng: 10 },
         { lat: 0,  lng: 10 }
       ]

}
