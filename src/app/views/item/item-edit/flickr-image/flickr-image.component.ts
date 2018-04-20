import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../services/flickr.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {ItemService} from '../../../../services/item.service.client';

@Component({
  selector: 'app-flickr-image',
  templateUrl: './flickr-image.component.html',
  styleUrls: ['../../../../style.css']
})
export class FlickrImageComponent implements OnInit {
  itemId: string;
  sellerId: string;
  item: any;
  photos: [any] = [{photo: ''}];
  errorMsg: string;
  errorFlag: boolean;
  searchText: string;


  constructor(private flickrService: FlickrService,
              private itemService: ItemService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
    this.errorMsg = 'Enter the name of the item';
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.itemId = params['iid'];
          this.sellerId = this.sharedService.user['_id'];
        }
      );
    this.itemService.findItemById(this.itemId).subscribe((returnItem: any) => {
      console.log(this.itemId);
      this.item = returnItem;
    });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    console.log(url);
    console.log(this.item);
    this.item.url = url;
    if (this.itemId !== 'undefined') {
      this.itemService.updateItem(this.itemId, this.item).subscribe(
        (data: any) => {
          const result = data;
          if (result) { this.router.navigate(
            ['user/seller/item/' + this.itemId]);
          } else {
            this.errorMsg = 'failed!';
          }
        }
      );
    }
  }


  profile() {
    this.router.navigate(['user/seller']);
  }

  goHome() {
    this.router.navigate(['loggedinhome/user']);
  }

  goLeft() {
    this.router.navigate(['user/seller/item/', this.itemId]);
  }
}
