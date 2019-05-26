import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';
import { Observable } from 'rxjs'
import { Calcu } from '../../models/calcu';


@Component({
  selector: 'app-previous-cal',
  templateUrl: './previous-cal.component.html',
  styleUrls: ['./previous-cal.component.css']
})
export class PreviousCalComponent implements OnInit {
  clicked = false;
  calculations = []; 
  token;
  uid;

  constructor(private calservice: CalculationService) { 
    this.token = JSON.parse(localStorage.getItem('access_token'));
    if(this.token){
      this.uid = this.token[0];
    }  
  }

  ngOnInit() {
  }

  getCal() {
    
    console.log(this.uid);
    this.calservice.getCal(this.uid).subscribe(data => {
      var data1= JSON.stringify(data);
      if(this.calculations.length != JSON.parse(data1).length){
      for(var i=0;i<JSON.parse(data1).length;++i){
        var calculation = {
          coordinates: JSON.parse(data1)[i].coordinates,
          area: JSON.parse(data1)[i].area
        }
        console.log(calculation);
        var c = JSON.stringify(calculation);
        this.calculations.push(c);
      }
      this.clicked =true;
    }
    });

  }
  addtolist(){

  }

}
