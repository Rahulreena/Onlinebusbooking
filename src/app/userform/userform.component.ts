import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
travelDetails:any
placeDetails:any
travelDate:any
seat:any
user_name:any
user_mobile:any
user_email:any
  constructor(private http:HttpClient ,private  router:Router) { }

  ngOnInit(): void {
    this.travelDetails=JSON.parse(localStorage.getItem('bus')||'')
this.travelDate=JSON.parse(localStorage.getItem('travel_date')||'')
this.placeDetails=JSON.parse(localStorage.getItem('travelarray')||'')
this.seat=JSON.parse(localStorage.getItem('seat')||'')
  }
 
Submitform(){
var Username = this.user_name
var Usermobilenumber = this.user_mobile
var Email = this.user_email
var Busname=this.travelDetails.bus_name
var Seatnumber=this.seat
var Busdate=this.travelDate

const body={
  Username,
  Usermobilenumber,Email,Busname,Seatnumber,Busdate
}
console.log(body);

return this.http.post('http://localhost:3000/ticketconfirm',body).subscribe((result:any)=>{
  if(result){
    alert(result.message)
    localStorage.setItem('username',JSON.stringify(this.user_name))
this.router.navigateByUrl('printdetails')
  }
})
}

}
