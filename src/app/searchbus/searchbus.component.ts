import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {
seatBox:boolean|undefined
payBox:boolean|undefined
Busarray:any=[
  {"bus_name":"Greenfield","depart_time":"9.00 am","coach_type":"AC","seat_available":40,"ticket_price":1000},
  {"bus_name":"A1 Travels","depart_time":"12.30 pm","coach_type":"AC","seat_available":30,"ticket_price":1000},
  {"bus_name":"Greenfield","depart_time":"5.00 pm","coach_type":"AC","seat_available":40,"ticket_price":1000},
  {"bus_name":"KSRTC Volvo","depart_time":"1.30 am","coach_type":"AC","seat_available":40,"ticket_price":1000},
]

busSeatarray:any=[]


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
bookBus(params:any){
this.seatBox=true
  console.log(params);
  
for (let bus of this.Busarray){
  if(bus.depart_time==params){
    localStorage.setItem('bus',JSON.stringify(bus))
    console.log(bus);
    
  }
}
}

clickseat(){
this.router.navigateByUrl('userform')
}

seat(value:any){
this.payBox=true
localStorage.setItem('seat',JSON.stringify(value))

console.log(value)


}
}
