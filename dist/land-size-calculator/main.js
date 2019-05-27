(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/payments/payments.component */ "./src/app/components/payments/payments.component.ts");
/* harmony import */ var _components_previous_cal_previous_cal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/previous-cal/previous-cal.component */ "./src/app/components/previous-cal/previous-cal.component.ts");









var routes = [
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '', component: _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"] },
    { path: 'user/buy', component: _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_7__["PaymentsComponent"] },
    { path: 'user/calculations', component: _components_previous_cal_previous_cal_component__WEBPACK_IMPORTED_MODULE_8__["PreviousCalComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'land-size-calculator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/payments/payments.component */ "./src/app/components/payments/payments.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _components_previous_cal_previous_cal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/previous-cal/previous-cal.component */ "./src/app/components/previous-cal/previous-cal.component.ts");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/calculation.service */ "./src/app/services/calculation.service.ts");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/payments.service */ "./src/app/services/payments.service.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _components_payments_payments_component__WEBPACK_IMPORTED_MODULE_14__["PaymentsComponent"],
                _components_previous_cal_previous_cal_component__WEBPACK_IMPORTED_MODULE_16__["PreviousCalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_15__["NgxStripeModule"].forRoot('pk_test_2fnIOolHoi0NEFUJmF1KXHp200SfxcJEwc'),
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDAcszHq1T04XcAuNpguUvldlMW2xMLXa8 '
                })
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _services_calculation_service__WEBPACK_IMPORTED_MODULE_17__["CalculationService"], _services_payments_service__WEBPACK_IMPORTED_MODULE_18__["PaymentsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 700px;\n}\n/* \n#map {\n    padding: 1px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA3MDBweDtcbn1cbi8qIFxuI21hcCB7XG4gICAgcGFkZGluZzogMXB4O1xufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"myApp\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Calculator</title>\n</head>\n<body>\n\n  <app-navbar></app-navbar>\n  <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\" mapTypeId=\"hybrid\" [zoom]=7 (mapClick)=\"placeMarker($event)\" >\n    <div *ngIf=\"markers.length>0\">\n    <agm-marker\n    [latitude]=\"markers[0].lat\"\n    [longitude]=\"markers[0].lng\"\n    [markerClickable]=\"true\"\n    (markerClick)=\"markerClicked($event)\"\n    (dragEnd)=\"markerDragEnd(markers.indexOf(m),$event)\">\n    <!-- <agm-polyline>\n        <agm-polyline-point [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n        </agm-polyline-point>\n    </agm-polyline> -->\n  </agm-marker>\n  </div>\n  <agm-polyline >\n    <ng-container *ngFor=\"let m of markers; \">\n      <agm-polyline-point  [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n      </agm-polyline-point>\n  </ng-container>\n  </agm-polyline>\n  <div *ngIf=\"completed\">\n    <agm-polygon [paths]=\"markers\" [strokeColor]=\"'#black'\" *ngFor=\"let m of markers \"  [clickable]=\"true\"  [visible]=\"markers.indexOf(m)==(markers.length-1)\" >\n    </agm-polygon>\n  </div>\n  </agm-map>\n\n  \n\n  <div class=\"btn-group btn-group-toggle\">\n   <div *ngIf=\"markers.length>0\">\n  <label class=\"btn-primary\" ngbButtonLabel>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteLastPoint()\">Delete Last Point</button>\n  </label>  \n  <label class=\"btn-primary\" ngbButtonLabel>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"clearPoints()\">Clear all ponits</button>\n    </label>\n  </div> \n  <div *ngIf=\"completed\">\n    <div *ngIf=\"5>=try || ispremium \">\n    <label class=\"btn-primary\" ngbButtonLabel>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"calculate()\">Calculate</button>\n    </label>\n  </div>\n  </div>\n  </div>\n\n  <div *ngIf=\"!ispremium\">\n    <p>Number of tries remaining: {{5-try}}\n    </p>\n    <p>Buy Premium for unlimited tries\n    </p>\n  </div>\n\n  <div class=\"jumbotron\" *ngIf=\"calculated\">\n    <h5>Area: {{areaM2}} m<sup>2</sup> | \n    {{areaKm2}} km<sup>2</sup> | \n    {{areaHectares}} hectares | \n    {{areaFeet2}} feet<sup>2</sup> | \n    {{areaMiles2}} square miles | \n    {{areaAcres}} acres\n    </h5>\n  </div>\n</body>\n</html>\n\n\n\n<!-- <!DOCTYPE html>\n<html>\n  <head>\n    <title>Simple Map</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">\n    <meta charset=\"utf-8\">\n    <style>\n      /* Always set the map height explicitly to define the size of the div\n       * element that contains the map. */\n      #map {\n        height: 100%;\n      }\n      /* Optional: Makes the sample page fill the window. */\n      html, body {\n        height: 100%;\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n    <script>\n      var map;\n      function initMap() {\n        map = new google.maps.Map(document.getElementById('map'), {\n          center: {lat: -34.397, lng: 150.644},\n          zoom: 8\n        });\n      }\n    </script>\n\n\n\n    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyD0Avje7JmeGuQ7HaIYoaOihszGXc5efNc\">\n    </script>\n  </body>\n</html> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calculation.service */ "./src/app/services/calculation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(calservice, router) {
        this.calservice = calservice;
        this.router = router;
        this.title = 'app';
        this.lat = 7.8731;
        this.lng = 80.7718;
        this.calculated = false;
        this.completed = false;
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
        this.markers = [];
        this.token = JSON.parse(localStorage.getItem('access_token'));
        if (this.token) {
            this.ispremium = this.token[2].premium;
            this.uid = this.token[0];
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.try = JSON.parse(localStorage.getItem('tries'));
    };
    HomeComponent.prototype.placeMarker = function ($event) {
        if (!this.completed) {
            console.log($event.coords.lat);
            console.log($event.coords.lng);
            this.markers.push({
                lat: $event.coords.lat,
                lng: $event.coords.lng
            });
            console.log(this.markers);
        }
        // google.maps.event.addListener(agm-polygon, 'click', function ($event) {
        //   alert(this.indexID);
        // }); 
    };
    HomeComponent.prototype.markerClicked = function ($event) {
        this.completed = true;
        this.markers.push({
            lat: this.markers[0].lat,
            lng: this.markers[0].lng
        });
        this.completed = true;
    };
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
    HomeComponent.prototype.Bearing = function (from, to) {
        var radiansPerDegree = Math.PI / 180.0;
        var degreesPerRadian = 180.0 / Math.PI;
        var lat1 = from.lat() * radiansPerDegree;
        var lon1 = from.lng() * radiansPerDegree;
        var lat2 = to.lat() * radiansPerDegree;
        var lon2 = to.lng() * radiansPerDegree;
        var angle = -Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
        if (angle < 0.0) {
            angle += Math.PI * 2.0;
            angle = angle * degreesPerRadian;
        }
        return angle;
    };
    HomeComponent.prototype.Angle = function (p1, p2, p3) {
        var bearing21 = this.Bearing(p2, p1);
        var bearing23 = this.Bearing(p2, p3);
        var angle = bearing21 - bearing23;
        if (angle < 0.0)
            angle += 360.0;
        return angle;
    };
    HomeComponent.prototype.PlanarPolygonAreaMeters2 = function (points) {
        var earthRadiusMeters = 6367460.0;
        var radiansPerDegree = Math.PI / 180.0;
        var metersPerDegree = 2.0 * Math.PI * earthRadiusMeters / 360.0;
        var a = 0.0;
        for (var i = 0; i < points.length; ++i) {
            var j = (i + 1) % points.length;
            var xi = points[i].lng * metersPerDegree * Math.cos(points[i].lat * radiansPerDegree);
            var yi = points[i].lat * metersPerDegree;
            var xj = points[j].lng * metersPerDegree * Math.cos(points[j].lat * radiansPerDegree);
            var yj = points[j].lat * metersPerDegree;
            a += xi * yj - xj * yi;
        }
        return Math.abs(a / 2.0);
    };
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
    HomeComponent.prototype.calculate = function () {
        var Area = 0;
        // if(this.markers.length > 2){
        //   for(var i=1;i<this.markers.length-1;++i){
        //     var areas = this.calculateSphericalArea(this.markers[0], this.markers[i], this.markers[i+1]);
        //     Area = Area + areas;
        //   }
        // } 
        Area = this.PlanarPolygonAreaMeters2(this.markers);
        console.log("The final Area of triangle is---------- " + Area);
        this.areaM2 = Area;
        this.areaKm2 = Area / 1000.0 / 1000.0;
        this.areaHectares = Area / 10000.0;
        this.areaFeet2 = Area * 3.2808399 * 3.2808399;
        this.areaMiles2 = this.areaFeet2 / 5280.0 / 5280.0;
        this.areaAcres = this.areaMiles2 * 640;
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
    };
    HomeComponent.prototype.saveCalculation = function (Area) {
        var token = JSON.parse(localStorage.getItem('access_token'));
        var data = {
            uid: token[0],
            coordinates: this.markers,
            area: Area
        };
        this.calservice.save(data).subscribe(function (data) {
        });
        var tries = JSON.parse(localStorage.getItem('tries')) + 1;
        this.try = this.try + 1;
        var aa = {
            uid: this.uid,
            tries: tries
        };
        localStorage.setItem('tries', tries);
    };
    HomeComponent.prototype.deleteLastPoint = function () {
        this.markers.pop();
        this.calculated = false;
        this.completed = false;
    };
    HomeComponent.prototype.clearPoints = function () {
        this.markers = [];
        console.log(this.markers);
        this.calculated = false;
        this.completed = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_calculation_service__WEBPACK_IMPORTED_MODULE_2__["CalculationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    background: #333;\n    color: #fff;\n    text-align: center;\n    padding: 10px;\n}\n\n.header a {\n    color: #fff;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGVhZGVyIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>Land Size Calculator</h1>\n  <nav>\n    <a routerLink=\"/login\">Login</a> | <a routerLink=\"/signup\">Signup</a>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    height: 80px;\n}\n\n.routerLinkActive { \n    background-color: red; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLnJvdXRlckxpbmtBY3RpdmUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"myApp\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Calculator</title>\n</head>\n<body>\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark navbar-default\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Land Size Calculator</a>\n        \n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n          <ul class=\"navbar-nav \">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/user/calculations']\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n                true}\">Calculations <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <div *ngIf=\"!ispremium\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/user/buy']\" [routerLinkActive]=\"['active']\">Buy Premium</a>\n            </li>\n            </div>\n            \n            \n          </ul>\n          <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/login']\" (click)=\"logout()\">LOG OUT</a>\n            </li>\n          </ul>\n          \n        </div>\n      </nav>\n      \n      <main role=\"main\" class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div ng-view></div>\n            </div>\n        </div>\n       \n      \n      </main><!-- /.container -->\n    \n</body>\n</html>"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.token = JSON.parse(localStorage.getItem('access_token'));
        if (this.token) {
            this.ispremium = this.token[2].premium;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('tries');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/layout/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    margin: 10px,\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtYXJnaW46IDEwcHgsXG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"myApp\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Calculator</title><link rel=\"stylesheet\" src=\"../home.component.css\">\n</head>\n<body>\n  <app-header></app-header>\n  <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n              <div class=\"card-header\">\n                <b>Log in</b>\n              </div>\n              <div class=\"card-body\">\n            <form action=\"\" class=\"form\" (ngSubmit)=\"Login()\"  #f=\"ngForm\" >\n\n            <!-- username -->\n            <div class=\"form-group\">\n              <label for=\"inputName\" class=\"sr-only\">Username</label>\n              <input type=\"text\" id=\"inputName\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Enter your name\" #inputName=\"ngModel\" required pattern=\"^[A-Za-z]+$\">\n              <div class=\"form-text text-danger\" *ngIf=\"inputName.touched && !inputName.valid\">\n                  <small *ngIf=\"inputName.errors.required\">Username is required!</small>\n                  <small *ngIf=\"inputName.errors.pattern\">Invalid username format!</small>\n                </div>\n            </div>\n\n            <!-- password -->\n            <div class=\"form-group\">\n              <label for=\"inputPassword\" class=\"sr-only\">password</label>\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter password\" #inputPassword=\"ngModel\" required pattern=\"^.{6,}\">\n              <div class=\"form-text text-danger\" *ngIf=\"inputPassword.touched && !inputPassword.valid\">\n                  <small *ngIf=\"inputPassword.errors.required\">Password is required!</small>\n                  <small *ngIf=\"inputPassword.errors.pattern\">Password should have at least 6 characters!</small>\n                </div>\n            </div>\n\n            <!-- Log in button -->\n            <button  color=\"info\" block=\"true\" type=\"submit\" [disabled]=\"!f.valid\">Log in</button>\n\n      </form>\n    </div>\n    \n\n</div>\n</div>\n<div class=\"col-md-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        var user = {
            name: this.name,
            password: this.password
        };
        this.auth.login(user).subscribe(function (data) {
            // login successful redirect to home
            var data1 = JSON.stringify(data);
            var token = JSON.parse(data1).msg;
            var tries = JSON.parse(data1).tries;
            localStorage.removeItem('access_token');
            localStorage.removeItem('tries');
            localStorage.setItem('access_token', JSON.stringify(token));
            localStorage.setItem('tries', JSON.stringify(tries));
            _this.router.navigateByUrl('home');
        }, function (error) {
            console.log(error);
            _this.router.navigated = false;
            alert("invalid username or password");
            // login failed so display error
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/payments/payments.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/payments/payments.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/payments/payments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/payments/payments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n      <title> The Land Size Calculator </title>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n      <title>Calculator</title><link rel=\"stylesheet\" src=\"../payment.component.css\">\n      <script src=\"https://checkout.stripe.com/checkout.js\" defer></script>\n      <script var stripePublicKey = \"pk_test_2fnIOolHoi0NEFUJmF1KXHp200SfxcJEwc\">\n      </script>  \n    </head>\n  <body>\n    <app-navbar></app-navbar>\n    <div class=\"jumbotron\">\n    <form novalidate (ngSubmit)=\"buy($event)\" [formGroup]=\"stripeTest\">\n      <input type=\"text\" formControlName=\"name\" placeholder=\"Card Holder Name\">\n      <div id=\"card-element\" class=\"field\"></div>\n      <button type=\"submit\">\n        BUY\n      </button>\n    </form>\n    </div>\n\n  </body>\n\n</html>"

/***/ }),

/***/ "./src/app/components/payments/payments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/payments/payments.component.ts ***!
  \***********************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/payments.service */ "./src/app/services/payments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(fb, payment, stripeService, router) {
        this.fb = fb;
        this.payment = payment;
        this.stripeService = stripeService;
        this.router = router;
        // optional parameters
        this.elementsOptions = {
            locale: 'es'
        };
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.stripeService.elements(this.elementsOptions)
            .subscribe(function (elements) {
            _this.elements = elements;
            // Only mount the element the first time
            if (!_this.card) {
                _this.card = _this.elements.create('card', {
                    style: {
                        base: {
                            iconColor: '#666EE8',
                            color: '#31325F',
                            lineHeight: '40px',
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '18px',
                            '::placeholder': {
                                color: '#CFD7E0'
                            }
                        }
                    }
                });
                _this.card.mount('#card-element');
            }
        });
    };
    PaymentsComponent.prototype.buy = function ($event) {
        var _this = this;
        var name = this.stripeTest.get('name').value;
        var token = JSON.parse(window.localStorage.getItem('access_token'));
        var uid = token[0];
        this.stripeService
            .createToken(this.card, { name: name })
            .subscribe(function (obj) {
            if (obj) {
                // console.log("Token is --> ",obj.token.id);
                // // Use the token to create a charge or a customer
                // // https://stripe.com/docs/charges
                // console.log(obj);
                // console.log(obj.token);
                console.log(uid);
                _this.payment.pay(obj, uid).subscribe(function (res) {
                    console.log("The response from server is ", res);
                    console.log('Payment Done');
                    var data1 = JSON.stringify(res);
                    var token = JSON.parse(data1).msg;
                    localStorage.setItem('access_token', JSON.stringify(token));
                    _this.router.navigateByUrl('home');
                    console.log(obj, uid);
                    token = JSON.parse(localStorage.getItem('access_token'));
                    console.log(token);
                }, function (error) {
                    console.log('The error is ', error);
                });
            }
            else if (obj.error) {
                // Error creating the token
                console.log(obj.error.message);
            }
        });
    };
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/components/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.css */ "./src/app/components/payments/payments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_payments_service__WEBPACK_IMPORTED_MODULE_4__["PaymentsService"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/components/previous-cal/previous-cal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/previous-cal/previous-cal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJldmlvdXMtY2FsL3ByZXZpb3VzLWNhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/previous-cal/previous-cal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/previous-cal/previous-cal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"myApp\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Calculator</title>\n</head>\n<body>\n  <app-navbar></app-navbar>\n  <label class=\"btn-primary\" ngbButtonLabel>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"getCal()\">Load Previous Calculations</button>\n  </label>\n  <div *ngIf=\"clicked\" >\n    <ul>\n    <li *ngFor=\"let m of calculations; let i = index\">\n        <h1> Calculation {{i+1}}</h1>\n        <div class=\"jumbotron\">\n        {{calculations[i]}}\n        </div>\n    </li>\n    </ul>\n      \n  </div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/components/previous-cal/previous-cal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/previous-cal/previous-cal.component.ts ***!
  \*******************************************************************/
/*! exports provided: PreviousCalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousCalComponent", function() { return PreviousCalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/calculation.service */ "./src/app/services/calculation.service.ts");



var PreviousCalComponent = /** @class */ (function () {
    function PreviousCalComponent(calservice) {
        this.calservice = calservice;
        this.clicked = false;
        this.calculations = [];
        this.token = JSON.parse(localStorage.getItem('access_token'));
        if (this.token) {
            this.uid = this.token[0];
        }
    }
    PreviousCalComponent.prototype.ngOnInit = function () {
    };
    PreviousCalComponent.prototype.getCal = function () {
        var _this = this;
        console.log(this.uid);
        this.calservice.getCal(this.uid).subscribe(function (data) {
            var data1 = JSON.stringify(data);
            if (_this.calculations.length != JSON.parse(data1).length) {
                for (var i = 0; i < JSON.parse(data1).length; ++i) {
                    var calculation = {
                        coordinates: JSON.parse(data1)[i].coordinates,
                        area: JSON.parse(data1)[i].area
                    };
                    console.log(calculation);
                    var c = JSON.stringify(calculation);
                    _this.calculations.push(c);
                }
                _this.clicked = true;
            }
        });
    };
    PreviousCalComponent.prototype.addtolist = function () {
    };
    PreviousCalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-previous-cal',
            template: __webpack_require__(/*! ./previous-cal.component.html */ "./src/app/components/previous-cal/previous-cal.component.html"),
            styles: [__webpack_require__(/*! ./previous-cal.component.css */ "./src/app/components/previous-cal/previous-cal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_calculation_service__WEBPACK_IMPORTED_MODULE_2__["CalculationService"]])
    ], PreviousCalComponent);
    return PreviousCalComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    margin: 10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBtYXJnaW46IDEwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html ng-app=\"myApp\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Calculator</title><link rel=\"stylesheet\" src=\"../home.component.css\">\n</head>\n<body>\n  <app-header></app-header>\n  <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n              <div class=\"card-header\">\n                <b>Sign up</b>\n              </div>\n              <div class=\"card-body\">\n                  <form action=\"\" class=\"form-signup\" (ngSubmit)=\"Signup()\" #f=\"ngForm\">\n                      \n                                <!-- username -->\n                                <div class=\"form-group\">\n                                  <label for=\"inputName\" class=\"sr-only\">Username</label>\n                                  <input type=\"text\" id=\"inputName\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Enter your name\" required pattern=\"^[A-Za-z]+$\" #inputName=\"ngModel\">\n                                  <div class=\"form-text text-danger\" *ngIf=\"inputName.touched && !inputName.valid\">\n                                      <small *ngIf=\"inputName.errors.required\">Username is required!</small>\n                                      <small *ngIf=\"inputName.errors.pattern\">Invalid name!</small>\n                                    </div>\n                                </div>\n                      \n                                <!-- email -->\n                                <div class=\"form-group\">\n                                  <label for=\"inputEmail\" class=\"sr-only\">Email</label>\n                                  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email address\" required pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\" #inputEmail=\"ngModel\">\n                                  <div class=\"form-text text-danger\" *ngIf=\"inputEmail.touched && !inputEmail.valid\">\n                                      <small *ngIf=\"inputEmail.errors.required\">Email is required!</small>\n                                      <small *ngIf=\"inputEmail.errors.pattern\">Invalid email!</small>\n                                    </div>\n                                </div>\n                      \n                                <!-- password -->\n                                <div class=\"form-group\">\n                                  <label for=\"inputPassword\" class=\"sr-only\">password</label>\n                                  <input type=\"text\" id=\"inputPassword\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter password\" required pattern=\"^.{6,}\" #inputPassword=\"ngModel\">\n                                  <div class=\"form-text text-danger\" *ngIf=\"inputPassword.touched && !inputPassword.valid\">\n                                      <small *ngIf=\"inputPassword.errors.required\">Password is required!</small>\n                                      <small *ngIf=\"inputPassword.errors.pattern\">Password should have at least 6 characters!</small>\n                                    </div>\n                                </div>\n                      \n                                <!-- confirm password -->\n                                <div class=\"form-group\">\n                                  <label for=\"inputCPassword\" class=\"sr-only\">Re enter password</label>\n                                  <input type=\"text\" id=\"inputCPassword\" class=\"form-control\" name=\"cpassword\" [(ngModel)]=\"cpassword\" placeholder=\"Confirm password\" required pattern=\"^.{6,}\" [disabled]=\"!inputPassword.valid\" #inputCPassword=\"ngModel\">\n                                  <div class=\"form-text text-danger\" *ngIf=\"inputCPassword.touched && !inputCPassword.valid\">\n                                      <small *ngIf=\"inputCPassword.errors.required\">Password is required!</small>\n                                      <small *ngIf=\"inputCPassword.errors.pattern\">Password should have at least 6 characters!</small>\n                                    </div>\n                                    <div class=\"form-text text-danger\" *ngIf=\"inputCPassword.valid\">\n                                      <small *ngIf=\"password!==cpassword\">Passwords are not equal!</small>\n                                    </div>\n                                </div>\n\n\n                                <!-- signUp button -->\n                                <button color=\"info\" block=\"true\" type=\"submit\"\n                                [disabled]=\"!f.valid || password!==cpassword\">Sign Up</button>\n\n                            </form>\n              </div>\n                      \n              \n          </div>\n      </div>\n      <div class=\"col-md-3\"></div>\n  </div>\n    \n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.Signup = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            password: this.password,
            premium: false
        };
        this.auth.signup(user).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('login');
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.Url = url + "/user/createUsers";
    }
    AuthService.prototype.getHttpOp = function () {
        if (JSON.parse(localStorage.getItem('access_token'))) {
            this.token = JSON.parse(localStorage.getItem('access_token'))[1];
        }
        else {
            this.token = "ieghknty";
        }
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth': this.token
            })
        };
    };
    // Signup
    AuthService.prototype.signup = function (user) {
        console.log(user.name + "  " + user.password + "  " + user.premium);
        return this.http.post(this.Url, user, this.getHttpOp());
    };
    AuthService.prototype.login = function (user) {
        console.log(user.name + "  " + user.password);
        return this.http.post(url + "/user/login", user, this.getHttpOp());
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/calculation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/calculation.service.ts ***!
  \*************************************************/
/*! exports provided: CalculationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationService", function() { return CalculationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
var CalculationService = /** @class */ (function () {
    function CalculationService(http) {
        this.http = http;
    }
    CalculationService.prototype.getHttpOp = function () {
        if (JSON.parse(localStorage.getItem('access_token'))) {
            this.token = JSON.parse(localStorage.getItem('access_token'))[1];
        }
        else {
            this.token = "ieghknty";
        }
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth': this.token
            })
        };
    };
    // Signup
    CalculationService.prototype.save = function (cal) {
        // console.log(`${user.name}  ${user.password}  ${user.premium}`)
        return this.http.post(url + "/calculation/saveCalculation", cal, this.getHttpOp());
    };
    CalculationService.prototype.getCal = function (uid) {
        return this.http.get(url + "/calculation/getCalculations", this.getHttpOp());
    };
    CalculationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CalculationService);
    return CalculationService;
}());



/***/ }),

/***/ "./src/app/services/payments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/payments.service.ts ***!
  \**********************************************/
/*! exports provided: PaymentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsService", function() { return PaymentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");




var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
var PaymentsService = /** @class */ (function () {
    function PaymentsService(http) {
        this.http = http;
    }
    PaymentsService.prototype.getHttpOp = function () {
        if (JSON.parse(localStorage.getItem('access_token'))) {
            this.token = JSON.parse(localStorage.getItem('access_token'))[1];
        }
        else {
            this.token = "ieghknty";
        }
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth': this.token
            })
        };
    };
    //payment
    PaymentsService.prototype.pay = function (obj, uid) {
        console.log(obj);
        return this.http.post(url + "/payment/buy", { token: obj.token.id, uid: uid }, this.getHttpOp());
    };
    PaymentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PaymentsService);
    return PaymentsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: 'http://localhost:8081'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/isuru/Projects/kaumini/land-size-calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map