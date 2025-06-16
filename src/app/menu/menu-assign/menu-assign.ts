import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MenuService } from '../menu.service';
import { RestaurantService } from '../../restaurant/restaurant.service';

@Component({
  selector: 'app-menu-assign',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './menu-assign.html',
  styleUrls: ['./menu-assign.css']
})
export class MenuAssign{
  private menuService = inject(MenuService);
  private restaurantService = inject(RestaurantService);

  restaurants$ = this.restaurantService.restaurants$;
  menuItems$ = this.menuService.menuItems$;

  selectedRestaurantId: number | null = null;
  selectedMenuIds: number[] = [];

  updateSelected(restaurantId: number) {
    this.selectedRestaurantId = restaurantId;
    this.selectedMenuIds = this.menuService.getAssignedMenus(restaurantId);
  }

  save() {
    if (this.selectedRestaurantId != null) {
      this.menuService.assignMenusToRestaurant(this.selectedRestaurantId, this.selectedMenuIds);
      alert('Menus assigned successfully!');
    }
  }
}
