import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../services/item.service.client';

@Component({
  selector: 'app-admin-item-edit',
  templateUrl: './admin-item-edit.component.html',
  styleUrls: ['../../../style.css']
})
export class AdminItemEditComponent implements OnInit {
  itemList: any[];
  category: String;
  itemId: String;
  @ViewChild('f') loginForm: NgForm;

  constructor(private itemService: ItemService, private router: Router,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.itemList = [];
  }

  findCategory() {
    this.itemService.findItemByCategory(this.category).subscribe((returnList: any) => {
      this.itemList = returnList;
      this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    });
  }

  findAllItem() {
    this.itemService.findAllItem().subscribe((returnList: any) => {
      this.itemList = returnList;
      this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    });
    this.category = undefined;
  }

  deleteItem(itemId) {
    this.itemService.deleteItem(itemId).subscribe((data: any) => {
    });
    if (this.category === undefined) {
      this.findAllItem();
    } else {
      this.findCategory();
    }
    this.router.navigate(['.'], {relativeTo: this.activatedRoute});
  }
}
