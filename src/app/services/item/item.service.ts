import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/Item';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  getItemById(id: number): Item {
    return this.getAll().find((item) => item.id === id)!;
  }

  getAllItemsBySearchTerm(searchTerm: string): Item[] {
    return this.getAll().filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 12 },
      { name: 'Fruits', count: 3 },
      { name: 'Vegetables', count: 3 },
      { name: 'Dairy', count: 3 },
      { name: 'Snacks', count: 3 },
    ];
  }

  getAllItemsByTag(tag: string): Item[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((item) => item.tags?.includes(tag));
  }

  getAll(): Item[] {
    return [
      {
        id: 1,
        name: 'Apples',
        price: 3,
        deliveryTime: '1-2 days',
        favorite: false,
        origins: ['Fruit'],
        stars: 4.7,
        imageUrl:
          'https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg',
        tags: ['Fruits'],
      },
      {
        id: 2,
        name: 'Bananas',
        price: 1.5,
        deliveryTime: '1-2 days',
        favorite: true,
        origins: ['Fruit'],
        stars: 4.8,
        imageUrl:
          'https://organicmandya.com/cdn/shop/files/BananaPachabale.jpg?v=1721369894&width=1500',
        tags: ['Fruits'],
      },
      {
        id: 3,
        name: 'Strawberries',
        price: 5,
        deliveryTime: '1-2 days',
        favorite: true,
        origins: ["Fruit"],
        stars: 4.9,
        imageUrl:
          'data:image/webp;base64,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',
        tags: ['Fruits'],
      },
      {
        id: 4,
        name: 'Carrots',
        price: 2,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['Vegetable'],
        stars: 4.5,
        imageUrl:
          'https://snodgrassking.com/wp-content/uploads/2019/06/ebeb8de1-590b-4a50-bcba-413b4bd3a1e6-1024x756.jpg',
        tags: ['Vegetables'],
      },
      {
        id: 5,
        name: 'Broccoli',
        price: 2.8,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['Vegetable'],
        stars: 4.4,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg',
        tags: ['Vegetables'],
      },
      {
        id: 6,
        name: 'Lettuce',
        price: 2.2,
        deliveryTime: 'Same day',
        favorite: true,
        origins: ['Vegetable'],
        stars: 4.7,
        imageUrl:
          'https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg',
        tags: ['Vegetables'],
      },
      {
        id: 7,
        name: 'Milk',
        price: 4,
        deliveryTime: 'Same day',
        favorite: true,
        origins: ['Dairy'],
        stars: 4.9,
        imageUrl:
          'https://4.imimg.com/data4/OE/UT/MY-14276604/desi-cow-s-raw-milk.jpg',
        tags: ['Dairy'],
      },
      {
        id: 8,
        name: 'Cheese',
        price: 6,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['Dairy'],
        stars: 4.6,
        imageUrl:
          'https://fhafnb.com/wp-content/uploads/2023/09/types-of-cheese-and-uses-1.jpg',
        tags: ['Dairy'],
      },
      {
        id: 9,
        name: 'Yogurt',
        price: 3.8,
        deliveryTime: 'Same day',
        favorite: true,
        origins: ['Dairy'],
        stars: 4.7,
        imageUrl:
          'https://images.getrecipekit.com/20240109191538-homemade-yogurt.jpg?width=650&quality=90&',
        tags: ['Dairy'],
      },
      {
        id: 10,
        name: 'Potato Chips',
        price: 2.5,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['Snack'],
        stars: 4.2,
        imageUrl:
          'https://www.allrecipes.com/thmb/WyCC-RL8cuAEKfYHsdnzqi64iTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73135-homestyle-potato-chips-ddmfs-0348-3x4-hero-c21021303c8849bbb40c1007bfa9af6e.jpg',
        tags: ['Snacks'],
      },
      {
        id: 11,
        name: 'Chocolate Bar',
        price: 1.8,
        deliveryTime: '1-3 days',
        favorite: true,
        origins: ['Snack'],
        stars: 4.8,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/cd/Green_and_Black%27s_dark_chocolate_bar_2.jpg',
        tags: ['Snacks'],
      },
      {
        id: 12,
        name: 'Almonds',
        price: 7,
        deliveryTime: '1-3 days',
        favorite: false,
        origins: ['Snack'],
        stars: 4.5,
        imageUrl:
          'https://cdn.britannica.com/04/194904-050-1B92812A/Raw-Food-Almond-food-Nut-Snack.jpg',
        tags: ['Snacks'],
      },
    ];
  }
}
