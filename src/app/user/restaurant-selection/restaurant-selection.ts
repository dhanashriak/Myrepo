import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantService } from '../../restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant-selection',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './restaurant-selection.html',
  styleUrls: ['./restaurant-selection.css']
})
export class RestaurantSelection {
  private service = inject(RestaurantService);
  private router = inject(Router);
  restaurants$ = this.service.restaurants$;

  selectRestaurant(id: number) {
    this.router.navigate(['/user/menu', id]);
  }
}
