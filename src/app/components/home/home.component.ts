import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Point } from '../../models/Point';
import { Marker } from '../../models/marker';

import { AgmCoreModule } from '@agm/core'; 

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
    // google.maps.event.addListener(agm-polygon, 'click', function ($event) {
    //   alert(this.indexID);
    // }); 
  }

  calculate(){

    const radiansPerDegree=Math.PI/180.0;
    
    const degreesPerRadian=180.0/Math.PI;
    const earthRadiusMeters=6367460.0;
    const metersPerDegree=2.0*Math.PI*earthRadiusMeters/360.0;

    console.log("Now calculating");

    var total=0.0;
    for(var i=0;i<this.markers.length;++i)
    {
      var j=(i+1)%this.markers.length;
      var xi=this.markers[i].lat*metersPerDegree*Math.cos(this.markers[i].lat*radiansPerDegree);
      var yi=this.markers[i].lat*metersPerDegree;
      var xj=this.markers[j].lng*metersPerDegree*Math.cos(this.markers[j].lat*radiansPerDegree);
      var yj=this.markers[j].lat*metersPerDegree;
      
      total+=xi*yj-xj*yi;
    }
    console.log(Math.abs(total/2.0));


    // var total = 0;
    
    //     for (var i = 0, l = this.markers.length; i < l; i++) {
    //       var addX = this.markers[i].lat;
    //       var addY = this.markers[i == this.markers.length - 1 ? 0 : i + 1].lng;
    //       var subX = this.markers[i == this.markers.length - 1 ? 0 : i + 1].lat;
    //       var subY = this.markers[i].lng;
    
    //       total += (addX * addY * 0.5);
    //       total -= (subX * subY * 0.5);
          
    //     }
    
        
  }

  deleteLastPoint(){
    this.markers.pop();
  }

  clearPoints() {
    this.markers = [];
    console.log(this.markers);
  }

  markerDragEnd(index, $event) {
    var latitude = $event.coords.lat;
    var longitude = $event.coords.lng;

    this.markers[index].lat = latitude;
    this.markers[index].lng = longitude;
    console.log(this.markers);
  }
  
  markers: Marker[] = [
  ]
  paths: Marker[] = [
         { lat: 10, lng: 10 },
         { lat: 0,  lng: 10 },
         { lat: 20,  lng: 10 },
         { lat: 20,  lng: 0 }
       ]

}
