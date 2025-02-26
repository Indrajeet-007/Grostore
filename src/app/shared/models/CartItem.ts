import { Item } from "./Item";

export class CartItem{
    constructor(items:Item){
      this.items = items;  
    }
    items:Item;
    quantity:number = 1;

    get price():number{
        return this.items.price * this.quantity;
    }
}