import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MenuService, MenuItem } from '../../menu/menu.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-selection',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule,FormsModule],
  templateUrl: './menu-selection.html',
  styleUrls: ['./menu-selection.css']
})
export class MenuSelection implements OnInit {
  private menuService = inject(MenuService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  restaurantId!: number;
  menuItems: MenuItem[] = [];
  selectedMenuIds: number[] = [];

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('restaurantId'));
    const assigned = this.menuService.getAssignedMenus(this.restaurantId);

    this.menuService.menuItems$.subscribe(items => {
      this.menuItems = items.filter(item => assigned.includes(item.id));
    });
  }

  toggleSelection(id: number) {
    if (this.selectedMenuIds.includes(id)) {
      this.selectedMenuIds = this.selectedMenuIds.filter(i => i !== id);
    } else {
      this.selectedMenuIds.push(id);
    }
  }

  placeOrder() {
    const orderedItems = this.menuItems.filter(item => this.selectedMenuIds.includes(item.id));
    localStorage.setItem('orderItems', JSON.stringify(orderedItems));
    this.router.navigate(['/user/confirmation']);
  }
}
