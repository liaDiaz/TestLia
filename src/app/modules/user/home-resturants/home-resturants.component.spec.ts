import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResturantsComponent } from './home-resturants.component';

describe('HomeResturantsComponent', () => {
  let component: HomeResturantsComponent;
  let fixture: ComponentFixture<HomeResturantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResturantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
