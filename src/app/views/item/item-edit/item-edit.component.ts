import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {ItemService} from '../../../services/item.service.client';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['../../../style.css']
})
export class ItemEditComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  sellerId: String;
  itemId: String;
  item: any;
  name: String;
  color: String;
  price: Number;
  imgurl: String;
  category: String;
  size: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private itemService: ItemService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sellerId = this.sharedService.user['_id'];
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.itemId = params['iid'];
          if (this.itemId !== undefined) {
            return this.itemService.findItemById(this.itemId).subscribe((returnItem: any) => {
              this.item = returnItem;
              this.name = this.item.name;
              this.color = this.item.text;
              this.price = this.item.price;
              this.imgurl = this.item.imgurl;
              this.category = this.item.category;
              this.size = this.item.size;

            });
          } else {
            this.item = {name: 'name', price: 0.0, color: 'color', imgurl: 'url', category: '', size: ''};
            this.name = this.item.name;
            this.color = this.item.color;
            this.price = this.item.price;
            this.imgurl = this.item.imgurl;
            this.category = this.item.category;
            this.size = this.item.size;
          }
        }
      );
  }

  updateOrCreate() {
    this.item.name = this.loginForm.value.name;
    this.item.color = this.loginForm.value.color;
    this.item.price = this.loginForm.value.price;
    this.item.imgurl = this.loginForm.value.imgurl;
    this.item.category = this.loginForm.value.category;
    this.item.size = this.loginForm.value.size;

    if (this.itemId !== undefined) {
      return this.itemService.updateItem(this.itemId, this.item).subscribe((returnItem: any) => {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      });
    } else {
      return this.itemService.createItem(this.sellerId, this.item.name, this.item.price,
        this.item.color, this.item.size, this.item.category, this.item.imgurl).subscribe((returnItem: any) => {
        this.item = returnItem;
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
      });

    }
  }

  delete() {
    if (this.itemId !== undefined) {
      return this.itemService.deleteItem(this.itemId).subscribe((returnItem: any) => {
      });
    } else {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    }
  }
}
