import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';
import { Point } from '../../models/Point';
import { Marker } from '../../models/marker';

import { AgmCoreModule } from '@agm/core'; 
import { AgmMap } from '@agm/core'; 

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = 'app';
lat: number = 7.8731;
lng: number = 80.7718;
areaM2;
areaKm2;
areaHectares;
areaFeet2;
areaMiles2;
areaAcres;
try;

calculated = false;
completed = false;

token = JSON.parse(localStorage.getItem('access_token'));
ispremium = this.token[2].premium;
uid = this.token[0];

constructor(
  private calservice: CalculationService,
  private router: Router) {
    console.log(this.token);
    console.log(this.try);
}

  ngOnInit() {
   this.try = JSON.parse(localStorage.getItem('tries'));
  }
  


  placeMarker($event){
    if(!this.completed){
      console.log($event.coords.lat);
      console.log($event.coords.lng);
      this.markers.push(
        {
          lat: $event.coords.lat,
          lng: $event.coords.lng
        }
      );
      console.log(this.markers);
    }
    

    // google.maps.event.addListener(agm-polygon, 'click', function ($event) {
    //   alert(this.indexID);
    // }); 
  }
  markerClicked($event){
    this.completed = true;
    this.markers.push(
      {
        lat: this.markers[0].lat,
        lng: this.markers[0].lng
      }
    );
    this.completed = true;
  }


  // calculateDistance(coordinate1, coordinate2){
  //   const earthRadius = 6371000;
  //   var degToRad = Math.PI/180.0;        //Radians per degree
  //   var lat1Rad = coordinate1.lat*degToRad;
  //   var lat2Rad = coordinate2.lat*degToRad;
  //   var dif1 = (coordinate2.lat-coordinate1.lat)*degToRad;
  //   var dif2 = (coordinate2.lng-coordinate1.lng)*degToRad;

  //   var a = Math.sin(dif1/2)*Math.sin(dif1/2) + Math.cos(lat1Rad)*Math.cos(lat2Rad)*Math.sin(dif2/2)*Math.sin(dif2/2);

  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //   var distance = earthRadius * c;

  //   return distance;
  // }  

  // calculateSphericalArea(coordinate1, coordinate2, coordinate3){
  //   const earthRadius = 6371000;

  //   var a = this.calculateDistance(coordinate1, coordinate2);
  //   var b = this.calculateDistance(coordinate2, coordinate3);
  //   var c = this.calculateDistance(coordinate1, coordinate3);
  //   console.log(a+" "+b+" "+c);
  //   var s = (a + b + c)/2;

  //   var e  = Math.sqrt(Math.abs(Math.tan(s/2)*Math.tan((s-a)/2)*Math.tan((s-b)/2)*Math.tan((s-c)/2)));
  //   // console.log((Math.tan(s/2))*(Math.tan((s-a)/2))*(Math.tan((s-b)/2))*(Math.tan((s-c)/2)));
  //   var E = (Math.atan(e))*4;

  //   var area = Math.PI*Math.pow(earthRadius, 2)*E/180;
  //   console.log("Area of triangle is- "+ area);
  //   return area;
  // }

  Bearing(from,to){
    const radiansPerDegree=Math.PI/180.0;
    const degreesPerRadian=180.0/Math.PI;

    var lat1=from.lat()*radiansPerDegree;
    var lon1=from.lng()*radiansPerDegree;
    var lat2=to.lat()*radiansPerDegree;
    var lon2=to.lng()*radiansPerDegree;
    var angle=-Math.atan2(Math.sin(lon1-lon2)*Math.cos(lat2),Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(lon1-lon2));
    if(angle<0.0)
    {
      angle+=Math.PI*2.0;angle=angle*degreesPerRadian;
    }
    return angle;
  }

  Angle(p1,p2,p3)
  {
    var bearing21=this.Bearing(p2,p1);
    var bearing23=this.Bearing(p2,p3);
    var angle=bearing21-bearing23;
    if(angle<0.0)
    angle+=360.0;
    return angle;
  }
  

  PlanarPolygonAreaMeters2(points){
    const earthRadiusMeters=6367460.0;
    const radiansPerDegree=Math.PI/180.0;
    const metersPerDegree=2.0*Math.PI*earthRadiusMeters/360.0;
    var a=0.0;
    for(var i=0;i<points.length;++i)
    {
      var j=(i+1)%points.length;
      var xi=points[i].lng*metersPerDegree*Math.cos(points[i].lat*radiansPerDegree);
      var yi=points[i].lat*metersPerDegree;
      var xj=points[j].lng*metersPerDegree*Math.cos(points[j].lat*radiansPerDegree);
      var yj=points[j].lat*metersPerDegree;
      
      a+=xi*yj-xj*yi;
    }
    return Math.abs(a/2.0);
  }
  
  // SphericalPolygonAreaMeters2(points) {
  //   const earthRadiusMeters=6367460.0;
  //   const radiansPerDegree=Math.PI/180.0;

  //   var totalAngle = 0.0;
  //   for (var i = 0; i < points.length; ++i) {
  //       var j = (i + 1) % points.length;
  //       var k = (i + 2) % points.length;
  //       totalAngle += this.Angle(points[i], points[j], points[k])
  //   }
  //   var planarTotalAngle = (points.length - 2) * 180.0;
  //   var sphericalExcess = totalAngle - planarTotalAngle;
  //   if (sphericalExcess > 420.0) {
  //       totalAngle = points.length * 360.0 - totalAngle;
  //       sphericalExcess = totalAngle - planarTotalAngle
  //   } else if (sphericalExcess > 300.0 && sphericalExcess < 420.0) {
  //       sphericalExcess = Math.abs(360.0 - sphericalExcess)
  //   }
  //   return sphericalExcess * radiansPerDegree * earthRadiusMeters * earthRadiusMeters;
  // }

  calculate(){
    var Area = 0;
    // if(this.markers.length > 2){
    //   for(var i=1;i<this.markers.length-1;++i){
    //     var areas = this.calculateSphericalArea(this.markers[0], this.markers[i], this.markers[i+1]);
    //     Area = Area + areas;
    //   }
    // } 

    Area = this.PlanarPolygonAreaMeters2(this.markers);
    console.log("The final Area of triangle is---------- "+ Area);
    this.areaM2 = Area;
    this.areaKm2=Area/1000.0/1000.0;
    this.areaHectares=Area/10000.0;
    this.areaFeet2=Area*3.2808399*3.2808399;
    this.areaMiles2=this.areaFeet2/5280.0/5280.0;
    this.areaAcres=this.areaMiles2*640;



    this.calculated = true;

    this.saveCalculation(Area);

    

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

  saveCalculation(Area){
    var token = JSON.parse(localStorage.getItem('access_token'));
    var data = {
      uid: token[0],
      coordinates: this.markers,
      area: Area
    }

    

    this.calservice.save(data).subscribe(data => {
    });
    var tries =JSON.parse(localStorage.getItem('tries'))+1;
    this.try = this.try+1;
    var aa = {
      uid: this.uid,
      tries: tries
    }

    localStorage.setItem('tries',tries);

  }

  deleteLastPoint(){
    this.markers.pop();
    this.calculated = false;
    this.completed = false;
  }

  clearPoints() {
    this.markers = [];
    console.log(this.markers);
    this.calculated = false;
    this.completed = false;
  }

  // markerDragEnd(index, $event) {
  //   var latitude = $event.coords.lat;
  //   var longitude = $event.coords.lng;

  //   this.markers[index].lat = latitude;
  //   this.markers[index].lng = longitude;
  //   console.log(this.markers);
  // }
  

  // polygonDragEnd(index, $event) {
  //   var latitude = $event.coords.lat;
  //   var longitude = $event.coords.lng;

  //   this.markers[index].lat = latitude;
  //   this.markers[index].lng = longitude;
  //   console.log(this.markers);
  // }

  markers: Marker[] = [
  ]
  

}