import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAssign } from './menu-assign';

describe('MenuAssign', () => {
  let component: MenuAssign;
  let fixture: ComponentFixture<MenuAssign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAssign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAssign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
