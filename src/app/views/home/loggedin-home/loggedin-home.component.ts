import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../services/item.service.client';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-loggedin-home',
  templateUrl: './loggedin-home.component.html',
  styleUrls: ['../../../style.css']
})
export class LoggedinHomeComponent implements OnInit {

  @ViewChild('f') homeForm: NgForm;
  items = [{}];
  itemName: String;
  user: any;
  userId: String;
  username: String;
  userType: String;
  searchContent: String;

  constructor(private itemService: ItemService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        params => {
          return this.userService.findUserById(this.sharedService.user['_id']).subscribe((returnUser: any) => {
            this.userId = this.sharedService.user['_id'];
            console.log(this.userId);
            this.user = returnUser;
            this.username = this.user.username;
            console.log(this.username);
          });
        }
      );
  }

  profile() {
    if (this.user.userType === 'Buyer') {
      this.router.navigate(['user/buyer']);
    }
    if (this.user.userType === 'Seller') {
      this.router.navigate(['user/seller']);
    }
    if (this.user.userType === 'Admin') {
      this.router.navigate(['user/admin']);
    }
  }

  search() {
    this.itemName = this.homeForm.value.searchContent;
    this.itemService.findItemByName(this.itemName).subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.sharedService.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchTop() {
    return this.itemService.findItemByCategory('Top').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      this.router.navigate(['user/searchresult']);
    });
  }

  searchSweatershirt() {
    return this.itemService.findItemByCategory('Sweatershirt').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      this.router.navigate(['user/searchresult']);
    });
  }

  searchAccessory() {
    return this.itemService.findItemByCategory('Accessory').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchJacket() {
    return this.itemService.findItemByCategory('Jacket').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchSkate() {
    return this.itemService.findItemByCategory('Skate').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchPants() {
    return this.itemService.findItemByCategory('Pants').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchBag() {
    return this.itemService.findItemByCategory('Bags').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchHat() {
    return this.itemService.findItemByCategory('Hat').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }

  searchShirt() {
    return this.itemService.findItemByCategory('Shirt').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      console.log(this.items);
      this.router.navigate(['user/searchresult']);
    });
  }
}
