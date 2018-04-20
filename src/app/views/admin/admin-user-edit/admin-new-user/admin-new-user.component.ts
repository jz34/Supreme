import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-new-user',
  templateUrl: './admin-new-user.component.html',
  styleUrls: ['../../../../style.css']
})
export class AdminNewUserComponent implements OnInit {

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
      this.userService.register(this.username, this.password, this.userType).subscribe((data: any) => {
          this.router.navigate(['user/admin/edituser']);
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
