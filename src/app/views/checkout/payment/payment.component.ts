import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {ItemService} from '../../../services/item.service.client';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../../../style.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  errorFlag = false;
  errorMsg = 'Your cvv number is wrong!';
  firstName: String;
  lastName: String;
  items: any;
  cvv: String;
  expirationDate: String;
  cardNumber: String;
  buyerId: String;
  sold: string;
  user: any;
  item: any;
  soldItem: any;

  constructor(private sharedService: SharedService, private router: Router,
              private userService: UserService, private itemService: ItemService) {
  }

  ngOnInit() {
    this.soldItem = new Array();
    this.sold = '';
    this.buyerId = this.sharedService.user['_id'];
    this.userService.findUserById(this.buyerId).subscribe((returnedUser: any) => {
      this.items = returnedUser.cart;
    });
    this.firstName = this.sharedService.user['firstName'];
    this.lastName = this.sharedService.user['lastName'];
    this.expirationDate = this.sharedService.user['expirationDate'];
    this.cardNumber = this.sharedService.user['cardNumber'];
  }

  check() {
    if (this.loginForm.value.cardNumber === this.cardNumber &&
      this.loginForm.value.cvv !== this.sharedService.user['cvv']) {
      this.errorFlag = true;
    } else {
      if (this.items.length !== 0) {
        this.user = this.sharedService.user;
        this.user['cart'] = [];
        this.userService.updateUser(this.user['_id'], this.user).subscribe((returnUser: any) => {
        });
        for (let i = 0; i < this.items.length; i++) {
          this.items[i]['_buyer'] = this.buyerId;
          this.itemService.updateItem(this.items[i]['_id'], this.items[i]).subscribe((Item: any) => {
            console.log(Item);
          });
        }
        this.router.navigate(['/user/buyer/summary']);
      } else {
        alert('No item in your cart!');
        this.router.navigate(['/loggedinhome/user']);
      }
    }
  }
}
