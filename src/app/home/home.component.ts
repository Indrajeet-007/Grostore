import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { Item } from '../shared/models/Item';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:false
})
export class HomeComponent implements OnInit {

  item: Item[] = [];
  constructor(private ItemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.item = this.ItemService.getAllItemsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.item = this.ItemService.getAllItemsByTag(params['tag']);
      else
        this.item = this.ItemService.getAll();
    })
  }
}
