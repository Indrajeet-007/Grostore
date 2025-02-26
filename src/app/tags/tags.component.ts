import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  standalone:false,
})
export class TagsComponent implements OnInit {

  @Input()
  homepageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    if(!this.homepageTags)
     this.tags = this.itemService.getAllTags();
  }

}
