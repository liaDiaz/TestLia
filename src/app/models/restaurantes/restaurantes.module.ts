import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export class RestaurantesModule {
  constructor(
    public _id?: string,
    public name?: string,
    public rating?: string,
    public contact?:Contact,
    public address?:Address,
    public localication?:Loc,
   
   
  ) {}
}
class Contact{

  constructor(
    public site?:string,
    public email?:string,
    public phone?: number,
  ) {}
}
class Address{
  constructor(
    public street?:string,
    public city?:string,
    public state?:string,
  ) {}

}

class Loc {
  constructor(
    public latitude?:number,
    public longitude?:number
  ) {}
}



