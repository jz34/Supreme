import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerListingComponent } from './seller-listing.component';

describe('SellerListingComponent', () => {
  let component: SellerListingComponent;
  let fixture: ComponentFixture<SellerListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
