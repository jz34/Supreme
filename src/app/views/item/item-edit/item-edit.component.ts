import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {ItemService} from '../../../services/item.service.client';
import {environment} from '../../../../environments/environment.prod';

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
  url: String;
  category: String;
  size: String;
  errorFlag: boolean;
  errorMsg: String;
  baseUrl = environment.baseUrl;

  constructor(private itemService: ItemService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sellerId = this.sharedService.user['_id'];
    this.errorFlag = false;
    this.errorMsg = 'You have missing information';
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.itemId = params['iid'];
          if (this.itemId !== undefined) {
            this.itemService.findItemById(this.itemId).subscribe((returnItem: any) => {
              this.item = returnItem;
              console.log(this.item);
              this.name = this.item.name;
              this.color = this.item.color;
              this.price = this.item.price;
              this.url = this.item.url;
              this.category = this.item.category;
              this.size = this.item.size;
            });
          } else {
            this.item = {name: '', price: '', color: '', url: '', category: '', size: ''};
            this.name = this.item.name;
            this.color = this.item.color;
            this.price = this.item.price;
            this.url = this.item.url;
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
    this.item.url = this.loginForm.value.url;
    this.item.category = this.loginForm.value.category;
    this.item.size = this.loginForm.value.size;
    if (this.item.name === '' || this.item.name === undefined ||
      this.item.color === '' || this.item.color === undefined ||
      this.item.price === '' || this.item.price === undefined ||
      this.item.category === '' || this.item.category === undefined ||
      this.item.size === '' || this.item.size === undefined) {
      this.errorFlag = true;
    } else {
      if (this.itemId !== undefined) {
        return this.itemService.updateItem(this.itemId, this.item).subscribe((returnItem: any) => {
          this.router.navigate(['/user/seller/listing'], {relativeTo: this.activatedRoute});
        });
      } else {
        return this.itemService.createItem(this.sellerId, this.item.name, this.item.price,
          this.item.color, this.item.size, this.item.category, this.item.url).subscribe((returnItem: any) => {
          this.item = returnItem;
          this.router.navigate(['/user/seller']);
        });
      }
    }
  }

  delete() {
    if (this.itemId !== undefined) {
      this.itemService.deleteItem(this.itemId).subscribe((returnItem: any) => {
      });
      this.router.navigate(['/user/seller/listing']);

    } else {
      this.router.navigate(['/user/seller']);
    }
  }

  goFlickr() {
    this.item.name = this.loginForm.value.name;
    this.item.color = this.loginForm.value.color;
    this.item.price = this.loginForm.value.price;
    this.item.category = this.loginForm.value.category;
    this.item.size = this.loginForm.value.size;
    if (this.item.name === '' || this.item.name === undefined ||
      this.item.color === '' || this.item.color === undefined ||
      this.item.price === '' || this.item.price === undefined ||
      this.item.category === '' || this.item.category === undefined ||
      this.item.size === '' || this.item.size === undefined) {
      this.errorFlag = true;
    } else {
      if (this.itemId !== undefined) {
        this.router.navigate(['/user/seller/item/' + this.itemId + '/flickr']);
      } else {
        this.itemService.createItem(this.sellerId, this.item.name, this.item.price,
          this.item.color, this.item.size, this.item.category, this.item.url).subscribe((returnItem: any) => {
          this.itemId = returnItem._id;
          this.router.navigate(['/user/seller/item/' + this.itemId + '/flickr']);
        });
      }
    }
  }
}
