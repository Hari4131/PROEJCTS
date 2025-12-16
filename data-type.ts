export interface signUp {
    name: string;
    email: string;
    password: string;
  }
  export interface login {
    email: String;
    password: String;
  }
  
  export interface product{
    pkg_name:string,
    pkg_price:number,
    pkg_desc:string,
    pkg_id:number,
    productId:undefined|number,
    inCart?:boolean
  }

  export interface product_kit{
    pck_id:number,
    pck_price_id:number,
    pck_pr_id:string,
    price_Id:number,
  }

  
  export interface cart{
    name:string,
    pkg_price:number,
    description:string,
    id:number| undefined,
    productId:number,
    userId:number
  }
  
  export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }
  
  export interface order {
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
  }