import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['../../../../style_derek.css']
})
export class BuyerProfileComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  userId: String;
  user: any;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  phone: String;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.user = this.sharedService.user;
    this.username = this.user.username;
    this.email = this.user.email;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.password = this.user.password;
    this.phone = this.user.phone;

  }


  logout() {
    this.sharedService.user = '';
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  update() {
    this.user.username = this.loginForm.value.username;
    this.user.firstName = this.loginForm.value.firstName;
    this.user.lastName = this.loginForm.value.lastName;
    this.user.email = this.loginForm.value.email;
    this.user.phone = this.loginForm.value.phone;
    this.userService.updateUser(this.userId, this.user).subscribe((returnUser: any) => {
      this.user = returnUser;
      this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    });
  }

  updateCreditCard() {
    this.router.navigate(['user/buyer/creditcard']);
  }

  showOrderHistory() {
    this.router.navigate(['user/buyer/history']);
  }

  goCart(){
    this.router.navigate(['user/buyer/cart']);
  }
}
