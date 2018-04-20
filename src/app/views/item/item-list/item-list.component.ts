import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';
import {ItemService} from '../../../services/item.service.client';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['../../../style.css']
})
export class ItemListComponent implements OnInit {
  user: any;
  userId: String;
  items: any;

  constructor(private itemService: ItemService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.user = this.sharedService.user;
    this.items = this.sharedService.items;
    for (let i = 0; i < this.items.length; i++) {
      console.dir(this.items[i]['_buyer']);
      if (!!this.items[i]['_buyer']) {
        this.items.splice(i, 1);
        i--;
      }
    }
  }

  display(itemId) {
    if (this.user.userType === 'Buyer' || 'Seller' || 'Admin') {
      this.router.navigate(['user/item', itemId]);
    }
    if (this.sharedService.user['userType'] === undefined) {
      this.router.navigate(['user/guest/item', itemId]);
    }
  }

  goHome() {
    if (this.user.userType === 'Buyer' || 'Seller' || 'Admin') {
      this.router.navigate(['loggedinhome/user']);
    }
    if (this.sharedService.user['userType'] === undefined) {
      this.router.navigate(['home']);
    }
    this.sharedService.items = [{}];
  }

  profile() {
    if (this.user.userType === 'Buyer') {
      this.router.navigate(['user/buyer']);
    }
    if (this.user.userType === 'Seller') {
      this.router.navigate(['user/seller']);
    }
    if (this.user.userType === 'Admin') {
      this.router.navigate(['user/admin']);
    }
    this.sharedService.items = [{}];
  }

  goCart() {
    console.log(this.user.userType);
    if (this.user.userType === 'Buyer') {
      this.router.navigate(['user/buyer/cart']);
    }
  }
}
