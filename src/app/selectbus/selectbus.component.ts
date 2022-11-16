import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectbus',
  templateUrl: './selectbus.component.html',
  styleUrls: ['./selectbus.component.css']
})
export class SelectbusComponent implements OnInit {
  leaving:any='Select Place'
  going:any='Going to'
  travelarray:any={}

depart_date:any
  constructor() { }

  ngOnInit(): void {
  }
searchBus(){
  console.log(this.depart_date,this.leaving,this.going);
  localStorage.setItem('travel_date',JSON.stringify(this.depart_date))
this.travelarray['leaving']=this.leaving
this.travelarray['going']=this.going
localStorage.setItem('travelarray', JSON.stringify(this.travelarray))

  
}
}
