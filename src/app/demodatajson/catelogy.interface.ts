import {Imails} from "../interfaces/demodatajson.interface";

export interface ICategory{
  name: string;
  childs: IChild[];
}
export interface IChild{
  name:string;
}
export interface IData{
  categorys: ICategory[];
  mails: Imails[];
}
export interface IDataJson{
  status:number;
  message:string;
  data: IData;
}
