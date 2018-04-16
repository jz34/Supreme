import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['../../../style.css']
})
export class AdminUserEditComponent implements OnInit {
  userList: [{}];
  search: String;
  userId: String;
  @ViewChild('f') loginForm: NgForm;

  constructor(private userService: UserService, private router: Router,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.userList = [{}];
  }

  findAllUser() {
    this.userService.findAllUser().subscribe((returnList: any) => {
      this.userList = returnList;
      this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    });
  }

  findUser() {
    this.search = this.loginForm.value.search;
    this.userService.findUserByUsernames(this.search).subscribe((returnList: any) => {
      this.userList = returnList;
      this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    });
  }

  delete(userId) {
    this.userService.deleteUser(userId).subscribe((data: any) => {
      this.router.navigate(['.'], {relativeTo: this.activatedRoute});
    });
  }
}
