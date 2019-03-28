import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Point } from '../../models/Point';
import { Marker } from '../../models/marker';

import { AgmCoreModule } from '@agm/core'; 
import { AgmMap } from '@agm/core'; 

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


  calculateDistance(coordinate1, coordinate2){
    const earthRadius = 6371000;
    var degToRad = Math.PI/180.0;        //Radians per degree
    var lat1Rad = coordinate1.lat*degToRad;
    var lat2Rad = coordinate2.lat*degToRad;
    var dif1 = (coordinate2.lat-coordinate1.lat)*degToRad;
    var dif2 = (coordinate2.lng-coordinate1.lng)*degToRad;

    var a = Math.sin(dif1/2)*Math.sin(dif1/2) + Math.cos(lat1Rad)*Math.cos(lat2Rad)*Math.sin(dif2/2)*Math.sin(dif2/2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var distance = earthRadius * c;

    return distance;
  }  

  calculateSphericalArea(coordinate1, coordinate2, coordinate3){
    const earthRadius = 6371000;

    var a = this.calculateDistance(coordinate1, coordinate2);
    var b = this.calculateDistance(coordinate2, coordinate3);
    var c = this.calculateDistance(coordinate1, coordinate3);
    console.log(a+" "+b+" "+c);
    var s = (a + b + c)/2;

    var e  = Math.sqrt(Math.abs(Math.tan(s/2)*Math.tan((s-a)/2)*Math.tan((s-b)/2)*Math.tan((s-c)/2)));
    // console.log((Math.tan(s/2))*(Math.tan((s-a)/2))*(Math.tan((s-b)/2))*(Math.tan((s-c)/2)));
    var E = (Math.atan(e))*4;

    var area = Math.PI*Math.pow(earthRadius, 2)*E/180;
    console.log("Area of triangle is- "+ area);
    return area;
  }

  calculate(){
    var Area = 0;
    if(this.markers.length > 2){
      for(var i=1;i<this.markers.length-1;++i){
        var areas = this.calculateSphericalArea(this.markers[0], this.markers[i], this.markers[i+1]);
        Area = Area + areas;
      }
    } 
    console.log("The final Area of triangle is---------- "+ Area);

    // const radiansPerDegree=Math.PI/180.0;
    
    // const degreesPerRadian=180.0/Math.PI;
    // const earthRadiusMeters=6367460.0;
    // const metersPerDegree=2.0*Math.PI*earthRadiusMeters/360.0;

    // console.log("Now calculating");

    // var total=0.0;
    // for(var i=0;i<this.markers.length;++i)
    // {
    //   var j=(i+1)%this.markers.length;
    //   var xi=this.markers[i].lat*metersPerDegree*Math.cos(this.markers[i].lat*radiansPerDegree);
    //   var yi=this.markers[i].lat*metersPerDegree;
    //   var xj=this.markers[j].lng*metersPerDegree*Math.cos(this.markers[j].lat*radiansPerDegree);
    //   var yj=this.markers[j].lat*metersPerDegree;
      
    //   total+=xi*yj-xj*yi;
    //   }
    // console.log(Math.abs(total/2.0));


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