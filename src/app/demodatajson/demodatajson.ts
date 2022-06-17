import {Component} from "@angular/core";
import {Imails} from "../interfaces/demodatajson.interface";
import {ICategory} from "./catelogy.interface";
// import {DemodatajsonInterface} from "../interfaces/demodatajson.interface";
// import {HttpClient, HttpParams} from "@angular/common/http";
// import * as http from "http";
@Component({
  selector: "app-datajson",
  templateUrl: "./demodatajson.html",

})
export class DemodatajsonCmponent{
 mails: Imails[]=[];
 categorys: ICategory[]=[];
}

