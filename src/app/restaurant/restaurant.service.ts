import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  cuisine: string;
}

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private _restaurants = new BehaviorSubject<Restaurant[]>([
    { id: 1, name: 'The Spice House', location: 'Mumbai', cuisine: 'Indian' },
    { id: 2, name: 'La Pizzeria', location: 'Pune', cuisine: 'Italian' }
  ]);

  restaurants$ = this._restaurants.asObservable();

  add(restaurant: Restaurant) {
    const current = this._restaurants.value;
    restaurant.id = Math.max(...current.map(r => r.id), 0) + 1;
    this._restaurants.next([...current, restaurant]);
  }

  update(updated: Restaurant) {
    const current = this._restaurants.value.map(r =>
      r.id === updated.id ? updated : r
    );
    this._restaurants.next(current);
  }

  delete(id: number) {
    const current = this._restaurants.value.filter(r => r.id !== id);
    this._restaurants.next(current);
  }
}
