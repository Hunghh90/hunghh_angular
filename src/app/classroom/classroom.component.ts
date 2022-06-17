import {Component} from "@angular/core";
@Component({
  selector:"app-classroom",
  templateUrl: "./classroom.component.html"
})
export class ClassroomComponent{
  className:string ="T2203E";
  hunghhNames:string[]=["Nguyen Van A","Tran Van B","Le Van C"];
  hunghhAges:number[]=[14,19,20];
  hunghhTelephones:string[]=["0123456789","9876543210", "123546879"];
  changeName(){
    this.className = "T2204M";
  }
}
