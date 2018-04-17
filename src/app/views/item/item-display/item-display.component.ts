import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../services/item.service.client';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['../../../style.css']
})
export class ItemDisplayComponent implements OnInit {
  item: any;
  iid: String;
  constructor(private itemService: ItemService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.iid = params['iid'];
      return this.itemService.findItemById(this.iid).subscribe(
        (item: any) => {
          this.item = item;
      });
    });
  }

}
