import {Component, Input} from "@angular/core";
import {LabInterface} from "../interfaces/lab.interface";
@Component({
  selector:"app-lab1",
  templateUrl:"./labpro.component.html"
})
export class LabproComponent{

  @Input() Lab !: LabInterface;
}
