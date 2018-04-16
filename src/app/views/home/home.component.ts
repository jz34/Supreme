import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../services/item.service.client';

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
              private router: Router) { }


  ngOnInit() {}

  search() {
    this.itemName = this.homeForm.value.searchContent;
    this.itemService.findItemByName(this.itemName).subscribe((returnItems: any) => {
      this.items = returnItems;
      console.log(this.items);
    });
    this.router.navigate(['user/searchresult']);
  }

  searchTop() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Top').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchSweatershirt() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Sweatershirt').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchAccessory() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Accessory').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchJacket() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Jacket').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchSkate() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Skate').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchPants() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Pants').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchBag() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Bag').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchHat() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Hat').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }

  searchShirt() {
    this.activatedRoute.params.subscribe(
      params => {
        return this.itemService.findItemByCategory('Shirt').subscribe((returnItems: any) => {
          this.items = returnItems;
          console.log(this.items);
        });
      }
    );
    this.router.navigate(['user/searchresult']);
  }
}
