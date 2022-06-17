import {Component} from "@angular/core";
import {IThoitiet} from "../interfaces/thoitiet";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector:'app-thoitiets',
  templateUrl: './thoitiets.component.html'
})
export class ThoitietsComponent{
 // @ts-ignore
  data: IThoitiet=null;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(){
  this.getData('hanoi');
  }
  getData(city: string){
    var parametrs= new HttpParams();
    parametrs=parametrs.append('q',city);
    parametrs=parametrs.append('appid','09a71427c59d38d6a34f89b47d75975c');
    parametrs=parametrs.append('units','metric');
    this.httpClient.get<IThoitiet>("https://api.openweathermap.org/data/2.5/weather",{params: parametrs}).subscribe(value=>{
  this.data = value;
    })
  }
  hanoi(){
    this.getData('hanoi');
  }saigon(){
    this.getData('saigon');
  }newyork(){
    this.getData('newyork');
  }
}
