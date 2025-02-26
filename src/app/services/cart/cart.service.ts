import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Item } from '../../shared/models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(items: Item):void{
    let cartItem = this.cart.items.find(item => item.items.id === items.id);
    if(cartItem){
      this.changeQuantity(items.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(items));
  }

  removeFromCart(itemsId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.items.id != itemsId);
  }

  changeQuantity(itemsId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.items.id === itemsId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
