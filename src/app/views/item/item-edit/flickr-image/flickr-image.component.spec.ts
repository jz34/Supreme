import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrImageComponent } from './flickr-image.component';

describe('FlickrImageComponent', () => {
  let component: FlickrImageComponent;
  let fixture: ComponentFixture<FlickrImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
