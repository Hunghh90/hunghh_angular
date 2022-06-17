import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HunghhComponent} from "./hunghh/hunghh.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {LabComponent} from "./labAngular/lab.component";
import {LabproComponent} from "./labAngular/labpro.component";
import {ThoitietsComponent} from "./thoitiet/thoitiets.component";
import {HttpClientModule} from "@angular/common/http";
import {DemodatajsonCmponent} from "./demodatajson/demodatajson";
import {Assignment2Component} from "./assignment2.component/assignment2.component";
import {Assignment1Component} from "./assignment1/assignment1.component";


@NgModule({
  declarations: [
    AppComponent,
    HunghhComponent,
    ClassroomComponent,
    LabComponent,
    LabproComponent,
    ThoitietsComponent,
    DemodatajsonCmponent,
    Assignment1Component,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
