import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IThuchanh} from "../interfaces/thuchanh.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService{
  static BASE_URL: string = 'https://api.openweathermap.org/data/2.5/';
  static APPID: string = '09a71427c59d38d6a34f89b47d75975c';
  constructor(private httpclient : HttpClient) {
  }
  contaclist(){
  return this.httpclient.get<IThuchanh>('http://localhost:51942/assets/data.json')
  }
}
0
