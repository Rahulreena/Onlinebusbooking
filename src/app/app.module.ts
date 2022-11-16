import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectbusComponent } from './selectbus/selectbus.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { UserformComponent } from './userform/userform.component';
import { PrintdetailsComponent } from './printdetails/printdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SelectbusComponent,
    SearchbusComponent,
    UserformComponent,
    PrintdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
