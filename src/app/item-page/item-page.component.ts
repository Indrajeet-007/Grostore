import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ItemService } from '../services/item/item.service';
import { Item } from '../shared/models/Item';

@Component({
  selector: 'app-items-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],standalone:false
})
export class FoodPageComponent implements OnInit {

  items!: Item;
  constructor(private activatedRoute:ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService,
    private router: Router) {
      
    activatedRoute.params.subscribe((params) => {
      console.log(params)
      if(params['id'])
      this.items = itemService.getItemById(Number(params['id']));
    console.log(this.items)
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.items);
    this.router.navigateByUrl('/cart-page');
  }

}
