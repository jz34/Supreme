import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinHomeComponent } from './loggedin-home.component';

describe('LoggedinHomeComponent', () => {
  let component: LoggedinHomeComponent;
  let fixture: ComponentFixture<LoggedinHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
