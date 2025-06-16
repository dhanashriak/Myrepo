import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  private _menuItems = new BehaviorSubject<MenuItem[]>([
    { id: 1, name: 'Burger', price: 120, category: 'Fast Food' },
    { id: 2, name: 'Pizza', price: 250, category: 'Italian' }
  ]);

  menuItems$ = this._menuItems.asObservable();

  add(item: MenuItem) {
    const current = this._menuItems.value;
    item.id = Math.max(...current.map(i => i.id), 0) + 1;
    this._menuItems.next([...current, item]);
  }

  update(updated: MenuItem) {
    const current = this._menuItems.value.map(item =>
      item.id === updated.id ? updated : item
    );
    this._menuItems.next(current);
  }

  delete(id: number) {
    const current = this._menuItems.value.filter(item => item.id !== id);
    this._menuItems.next(current);
  }

  private _assignments = new BehaviorSubject<Map<number, number[]>>(new Map());
// Map<restaurantId, menuItemIds[]>

assignments$ = this._assignments.asObservable();

assignMenusToRestaurant(restaurantId: number, menuIds: number[]) {
  const updated = new Map(this._assignments.value);
  updated.set(restaurantId, menuIds);
  this._assignments.next(updated);
}

getAssignedMenus(restaurantId: number): number[] {
  return this._assignments.value.get(restaurantId) ?? [];
}

}
