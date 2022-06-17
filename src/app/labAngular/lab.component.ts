import {Component, Input} from "@angular/core";
import {LabInterface} from "../interfaces/lab.interface";
@Component({
  selector: "app-lab",
  templateUrl: "./lab.component.html"
})
export class LabComponent{
  data: LabInterface []=[
    {Id:1 , Name: 'Iphone' , Price: 100 , Quality:10},
    {Id:2 , Name: 'Vivo' , Price: 200 , Quality:5},
    {Id:3 , Name: 'SamSung' , Price: 300 , Quality:15},
    {Id:4 , Name: 'Xiaomi' , Price: 400 , Quality:8},
  ];
}
