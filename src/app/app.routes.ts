import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Menu } from './menu/menu';


import { RestaurantCompo } from './restaurant/restaurantCompo';
import { MenuAssign } from './menu/menu-assign/menu-assign';
import { RestaurantSelection } from './user/restaurant-selection/restaurant-selection';
import { MenuSelection } from './user/menu-selection/menu-selection';
import { OrderConfirmation } from './user/order-confirmation/order-confirmation';


export const routes: Routes = [
  { path: 'admin', component: Admin},
  { path: 'menu', component: Menu},
  { path: 'restaurant', component: RestaurantCompo},
 

  { path: 'user', component: RestaurantSelection },
  { path: 'user/menu/:restaurantId', component: MenuSelection },
  { path: 'user/confirmation', component: OrderConfirmation },
  { path: 'assign-menu', component: MenuAssign },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', redirectTo: 'user' },
];
