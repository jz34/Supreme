import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../../style.css']
})
export class CartComponent implements OnInit {
  items: [{}];
  total: number;
  user: any;

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.total = 0;
    this.user = this.sharedService.user;
    this.userService.findUserById(this.user['_id']).subscribe((returnUser: any) => {
      this.items = returnUser.cart;
      if (this.items !== undefined) {
        for (let i = 0; i < this.items.length; i++) {
          this.total += this.items[i]['price'];
        }
      }
    });
  }

  remove(itemId) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]['_id'] === itemId) {
        this.total -= this.items[i]['price'];
        this.items.splice(i, 1);
        this.user['cart'] = this.items;
        this.userService.updateUser(this.user['_id'], this.user).subscribe((returnUser: any) => {
          }
        );
        this.router.navigate(['/user/buyer/cart']);

      }
    }
  }

  goPayment() {
    this.router.navigate(['/user/buyer/payment']);
  }
}
