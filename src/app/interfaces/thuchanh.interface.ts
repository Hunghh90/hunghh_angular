

  export interface Child {
    name: string;
  }

  export interface Category {
    name: string;
    childs: Child[];
  }

  export interface Mail {
    title: string;
    hiredate: string;
    address: string;
    city: string;
    phone: string;
    name: string;
    child: string;
  }

  export interface Data {
    categories: Category[];
    mails: Mail[];
  }

  export interface IThuchanh {
    status: number;
    message: string;
    data: Data;
  }



