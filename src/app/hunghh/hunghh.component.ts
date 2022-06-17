import {Component, Input} from "@angular/core";
@Component({
  selector: "app-hunghh",
  templateUrl: "./component.html"
})
export class HunghhComponent{
  @Input("hunghhName") hunghhName !: string;
  @Input("hunghhAge") hunghhAge !:number;
  @Input("hunghhTelephone") hunghhTelephone !:string;
}
