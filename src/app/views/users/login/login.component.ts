import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../style.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag = false;
  errorMsg = 'Invalid username or password!';
  baseUrl = environment.baseUrl;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) {}

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.errorFlag = false;
          this.router.navigate(['/user', data.userType.toLowerCase()]);
        },
        (error: any) => {
          console.log(this.errorMsg);
          this.errorFlag = true;
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }
}
