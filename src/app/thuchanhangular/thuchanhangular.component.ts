import {Component} from "@angular/core";
import {Category, Mail} from "../interfaces/thuchanh.interface";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-thuchanhangular',
  templateUrl: './thuchanhangular.component.html'
})
export class ThuchanhangularComponent{

  name: Category[] = [];
  contacts: Mail[]=[];
  constructor(private dataService : DataService) {
  }
  ngOnInit(){
    this.dataService.contaclist().subscribe(value=>{
      this.name = value.data.categories;
      this.contacts = value.data.mails;
    })
  }
  changeMails(category: string, child: string){
    var new_list: Mail[] = [];
    this.dataService.contaclist().subscribe(value=>{
      for(var i=0;i<value.data.mails.length;i++){
        if(value.data.mails[i].child == child && value.data.mails[i].child == child){
          new_list.push(value.data.mails[i]);
        }
      }
      this.contacts = new_list;
    })
  }

}
