import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['../../../style.css']
})
export class ChooserComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  user: any;
  userId: String;
  userType: String;
  username: String;
  hasUserType = false;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.sharedService.user['_id'];
    this.userType = this.user.userType;
    if (this.userType === 'Buyer') {
      this.router.navigate(['/user/buyer']);
    }
    if (this.userType === 'Seller') {
      this.router.navigate(['/user/seller']);
    }
  }

  updateTypeAndUsername() {
    if (this.userType !== undefined) {
      this.hasUserType = true;
    } else {
      return;
    }

    this.username = this.loginForm.value.username;

    this.user.userType = this.userType;
    this.user.username = this.username;

    this.userService.updateUser(this.userId, this.user).subscribe((returnUser: any) => {
      this.sharedService.user = returnUser;
      this.router.navigate(['/user', this.userType.toLowerCase()], {relativeTo: this.activatedRoute});
    });
  }

}
