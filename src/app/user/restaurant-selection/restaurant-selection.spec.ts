import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSelection } from './restaurant-selection';

describe('RestaurantSelection', () => {
  let component: RestaurantSelection;
  let fixture: ComponentFixture<RestaurantSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
