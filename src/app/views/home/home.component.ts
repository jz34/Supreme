import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../services/item.service.client';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../style.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') homeForm: NgForm;
  items = [{}];
  itemName: String;
  searchContent: String;

  constructor(private itemService: ItemService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }


  ngOnInit() {
  }

  search() {
    this.itemName = this.homeForm.value.searchContent;
    this.itemService.findItemByName(this.itemName).subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      this.router.navigate(['user/guest/searchresult']);
    });
  }

  searchTop() {
    return this.itemService.findItemByCategory('Top').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      this.router.navigate(['user/guest/searchresult']);
    });
  }

  searchSweatershirt() {
    return this.itemService.findItemByCategory('Sweatershirt').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;
      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchAccessory() {
    return this.itemService.findItemByCategory('Accessory').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchJacket() {
    return this.itemService.findItemByCategory('Jacket').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchSkate() {
    return this.itemService.findItemByCategory('Skate').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchPants() {
    return this.itemService.findItemByCategory('Pants').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchBag() {
    return this.itemService.findItemByCategory('Bags').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchHat() {
    return this.itemService.findItemByCategory('Hat').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }

  searchShirt() {
    return this.itemService.findItemByCategory('Shirt').subscribe((returnItems: any) => {
      this.sharedService.items = returnItems;

      this.router.navigate(['user/guest/searchresult']);

    });
  }
}
