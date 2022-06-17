import {Component} from "@angular/core";
import {IAssignment2} from "../interfaces/assignment2.interface";


@Component({
  selector:'app-assignment2',
  templateUrl:'./assignment2.component.html',
})
export class Assignment2Component{
  contents:  IAssignment2[]=[
    {name:'To Do', task: 'Task 1',noidung:'noidung1'},
    {name:'In Progess', task: 'Task 2',noidung:'noidung2'},
    {name:'In Review', task: 'Task 3',noidung:'noidung3'},
    {name:'Done', task: 'Task 4',noidung:'noidung4'},

  ]
}
