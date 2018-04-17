import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../../../services/item.service.client';

@Component({
  selector: 'app-seller-listing',
  templateUrl: './seller-listing.component.html',
  styleUrls: ['../../../../../style.css']
})
export class SellerListingComponent implements OnInit {
  itemList: [{}];
  user: any;
  sellerId: String;
  @ViewChild('f') loginForm: NgForm;

  constructor(private itemService: ItemService, private router: Router,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.sellerId = this.user._id;
    this.itemService.findSellerListing(this.sellerId).subscribe((returnList: any) => {
      this.itemList = returnList;
    });
    console.log(this.itemList);
  }

  goToEdit(itemId) {
    this.router.navigate(['user/seller/item/', itemId]);
  }
}
