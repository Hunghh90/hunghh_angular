import {Component} from "@angular/core";
import {IThuchanh, Category, Mail} from "../interfaces/thuchanh.interface";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-thuchanhangular',
  templateUrl: './thuchanhangular.component.html'
})
export class ThuchanhangularComponent{

  name: Category[] = [];
  contacts: Mail[]=[];
  constructor(private DataService : DataService) {
  }
  ngOnInit(){
    this.DataService.contaclist().subscribe(value=>{
      this.name = value.data.categories;
      this.contacts = value.data.mails;
    })
  }

}
