import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintdetailsComponent } from './printdetails/printdetails.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { SelectbusComponent } from './selectbus/selectbus.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {path:'',component:SelectbusComponent},
  {path:'searchbus',component:SearchbusComponent},
  {path:'userform',component:UserformComponent},
  {path:'printdetails',component:PrintdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
