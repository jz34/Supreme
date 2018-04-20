import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['../../../style.css']
})
export class CreditcardComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  user: any;
  userType: String;
  userId: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  address: String;
  zip: String;
  unit: String;
  state: String;
  city: String;
  cardNumber: String;
  cvv: String;
  expirationDate: String;

  constructor(private userService: UserService, private router: Router,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.sharedService.user;
    this.userType = this.sharedService.user['userType'];
    this.userId = this.sharedService.user['_id'];
    this.firstName = this.sharedService.user['firstName'];
    this.lastName = this.sharedService.user['lastName'];
    this.email = this.sharedService.user['email'];
    this.phone = this.sharedService.user['phone'];
    this.address = this.sharedService.user['address'];
    this.zip = this.sharedService.user['zip'];
    this.state = this.sharedService.user['state'];
    this.city = this.sharedService.user['city'];
    this.cardNumber = this.sharedService.user['cardNumber'];
    this.cvv = this.sharedService.user['cvv'];
    this.expirationDate = this.sharedService.user['expirationDate'];
  }

  update() {
    this.user._id = this.userId;
    this.user.firstName = this.loginForm.value.firstName;
    this.user.lastName = this.loginForm.value.lastName;
    this.user.email = this.loginForm.value.email;
    this.user.address = this.loginForm.value.address;
    this.user.zip = this.loginForm.value.zip;
    this.user.state = this.loginForm.value.state;
    this.user.cardNumber = this.loginForm.value.cardNumber;
    this.user.cvv = this.loginForm.value.cvv;
    this.user.expirationDate = this.loginForm.value.expirationDate;
    this.user.city = this.loginForm.value.city;
    this.userService.updateUser(this.userId, this.user).subscribe((returnUser: any) => {
      this.sharedService.user = this.user;
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    });
  }
  goProfile() {
    this.router.navigate(['user', this.userType.toLowerCase()]);
  }
}
