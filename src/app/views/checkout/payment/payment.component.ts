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
  city: String;
  email: String;
  phone: String;
  address: String;
  zip: String;
  state: String;
  unit: String;
  errorFlag = false;
  errorMsg = 'Please complete the form!';
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
    this.soldItem = [];
    this.sold = '';
    this.buyerId = this.sharedService.user['_id'];
    this.userService.findUserById(this.buyerId).subscribe((returnedUser: any) => {
      this.items = returnedUser.cart;
    });
    this.firstName = this.sharedService.user['firstName'];
    this.lastName = this.sharedService.user['lastName'];
    this.expirationDate = this.sharedService.user['expirationDate'];
    this.cardNumber = this.sharedService.user['cardNumber'];
    this.state = this.sharedService.user['city'];
    this.zip = this.sharedService.user['zip'];
    this.unit = this.sharedService.user['unit'];
    this.address = this.sharedService.user['address'];
    this.phone = this.sharedService.user['phone'];
    this.email = this.sharedService.user['email'];


  }

  check() {
    this.firstName = this.loginForm.value.firstName;
    this.lastName = this.loginForm.value.lastName;
    this.email = this.loginForm.value.email;
    this.phone = this.loginForm.value.phone;
    this.address = this.loginForm.value.address;
    this.unit = this.loginForm.value.unit;
    this.state = this.loginForm.value.state;
    this.city = this.loginForm.value.city;
    this.cardNumber = this.loginForm.value.cardNumber;
    this.expirationDate = this.loginForm.value.expirationDate;
    this.cvv = this.loginForm.value.cvv;
    console.log(this.sharedService.user['cvv']);
    if (!this.firstName || !this.lastName || !this.email || !this.phone || !this.state || !this.city
      || !this.cardNumber || !this.cvv || !this.expirationDate || !this.address) {
      this.errorFlag = true;
      this.errorMsg = 'One or more information missing';
    } else {
      this.errorFlag = false;
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
