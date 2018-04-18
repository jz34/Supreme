import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../services/item.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['../../../style.css']
})
export class ItemDisplayComponent implements OnInit {
  item: any;
  iid: String;
  user: any;
  userId: String;

  itemName: String;
  itemColor: String;
  itemSize: String;
  itemPrice: Number;
  itemCategory: String;
  itemUrl: String;

  isSeller = false;
  isGuest = false;
  isDuplicate = false;
  isSellerMsg = 'You are not able to buy! Please Switch to Buyer account to buy!';
  isGuestMsg = 'Please register to buy!';
  isDuplicateMsg = 'Item has already been added to your cart';

  constructor(private itemService: ItemService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params.subscribe(params => {
      this.iid = params['iid'];
      return this.itemService.findItemById(this.iid).subscribe(
        (item: any) => {
          this.item = item;
          this.itemCategory = this.item.category;
          this.itemName = this.item.name;
          this.itemColor = this.item.color;
          this.itemUrl = this.item.url;
          this.itemPrice = this.item.price;
          this.itemSize = this.item.size;
        });
    });
  }

  goToProfile() {
    if (this.user.userType === 'Buyer') {
      this.router.navigate(['user/buyer']);
    }
    if (this.user.userType === 'Seller') {
      this.router.navigate(['user/seller']);
    }
    if (this.user.userType === 'Admin') {
      this.router.navigate(['user/admin']);
    }
  }

  addToCart() {
    if (this.user === '') {
      this.isGuest = true;
      return;
    } else {
      this.isGuest = false;
    }

    if (this.user.userType === 'Seller') {
      this.isSeller = true;
      return;
    } else {
      this.isSeller = false;
    }

    for (let _i = 0; _i < this.user.cart.length; _i++) {
      const currItem = this.user.cart[_i];
      if (currItem._id === this.item._id) {
        this.isDuplicate = true;
        return;
      }
    }

    this.isDuplicate = false;

    this.user.cart.push(this.item);

    this.userService.updateUser(this.userId, this.user).subscribe((returnUser: any) => {
      this.userService.findUserById(this.userId).subscribe((founduser: any) => {
        this.sharedService.user = founduser;
      });
      this.router.navigate(['/loggedinhome/user']);
      window.confirm('Item added!');
    });

  }

}
