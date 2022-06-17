import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ThuchanhangularComponent} from "./thuchanhangular/thuchanhangular.component";


@NgModule({
  declarations: [
    AppComponent,
    ThuchanhangularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
