import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/Item';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() { }

  getItemById(id: number): Item {
    return this.getAll().find(item => item.id === id)!;
  }

  getAllItemsBySearchTerm(searchTerm: string): Item[] {
    return this.getAll().filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 10 },
      { name: 'Fruits', count: 3 },
      { name: 'Vegetables', count: 2 },
      { name: 'Dairy', count: 2 },
      { name: 'Snacks', count: 3 },
    ];
  }

  getAllItemsByTag(tag: string): Item[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter(item => item.tags?.includes(tag));
  }

  getAll(): Item[] {
    return [
      {
        id: 1,
        name: 'Apples',
        price: 3,
        deliveryTime: '1-2 days',
        favorite: false,
        origins: ['USA', 'Canada'],
        stars: 4.7,
        imageUrl: 'assets/images/grocery/apple.jpg',
        tags: ['Fruits'],
      },
      {
        id: 2,
        name: 'Bananas',
        price: 1.5,
        deliveryTime: '1-2 days',
        favorite: true,
        origins: ['Ecuador', 'India'],
        stars: 4.8,
        imageUrl: 'assets/images/grocery/banana.jpg',
        tags: ['Fruits'],
      },
      {
        id: 3,
        name: 'Carrots',
        price: 2,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: 'assets/images/grocery/carrot.jpg',
        tags: ['Vegetables'],
      },
      {
        id: 4,
        name: 'Milk',
        price: 4,
        deliveryTime: 'Same day',
        favorite: true,
        origins: ['USA'],
        stars: 4.9,
        imageUrl: 'assets/images/grocery/milk.jpg',
        tags: ['Dairy'],
      },
      {
        id: 5,
        name: 'Cheese',
        price: 6,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['France', 'Italy'],
        stars: 4.6,
        imageUrl: 'assets/images/grocery/cheese.jpg',
        tags: ['Dairy'],
      },
      {
        id: 6,
        name: 'Potato Chips',
        price: 2.5,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['USA'],
        stars: 4.2,
        imageUrl: 'assets/images/grocery/chips.jpg',
        tags: ['Snacks'],
      },
      {
        id: 7,
        name: 'Chocolate Bar',
        price: 1.8,
        deliveryTime: '1-3 days',
        favorite: true,
        origins: ['Switzerland'],
        stars: 4.8,
        imageUrl: 'assets/images/grocery/chocolate.jpg',
        tags: ['Snacks'],
      },{
        id: 8,
        name: 'Orange',
        price: 2.0,
        deliveryTime: '1-3 days',
        favorite: true,
        origins: ['India'],
        stars: 4.7,
        imageUrl: 'assets/images/grocery/chocolate.jpg',
        tags: ['Fruits'],
      },
    ];
  }
}
