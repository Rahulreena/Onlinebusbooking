import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printdetails',
  templateUrl: './printdetails.component.html',
  styleUrls: ['./printdetails.component.css']
})
export class PrintdetailsComponent implements OnInit {
details:any
placeDetails:any
Username:any
  constructor(private http:HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.placeDetails=JSON.parse(localStorage.getItem('travelarray')||'')
    var Seatnumber=JSON.parse(localStorage.getItem('seat')||'')
    var Username=JSON.parse(localStorage.getItem('username')||'')
    console.log(Seatnumber,Username);
    

  this.http.get('http://localhost:3000/details/'+Username+'/'+Seatnumber).subscribe((result:any)=>{
    if(result){
      console.log(result.result);
      
this.details=result.result
console.log(this.details)
    }
  })

  }

  Cancel(){

var Username = this.details.Username
var Usermobilenumber = this.details.Usermobilenumber

    this.http.delete('http://localhost:3000/canceltrip/'+Username+'/'+Usermobilenumber).subscribe((result:any)=>{
      if(result){
        
        alert(result.message)
        
        this.router.navigateByUrl('')
 
      }
    })

  }

}
