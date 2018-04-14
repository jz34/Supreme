import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../style.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  verifiedPassword: String;
  userType: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  register() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifiedPassword = this.loginForm.value.verifiedPassword;
    if (this.loginForm.value.userType) {
      this.userType = 'Seller';
    } else {
      this.userType = 'Buyer';
    }
    if (this.password !== this.verifiedPassword) {
      this.errorFlag = true;
    } else {
      const user = {username: this.username, password: this.password, userType: this.userType};
      this.userService.register(this.username, this.password, this.userType).subscribe((data: any) => {
          this.sharedService.user = data;
          this.router.navigate(['/user', this.userType.toLowerCase(), data._id]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Username is in use';
        }
      );
    }
  }

  ngOnInit() {
  }
}
