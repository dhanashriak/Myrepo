import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MenuService, MenuItem } from './menu.service';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuDialogComponent } from './menu-dialog.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  private dialog = inject(MatDialog);
  private service = inject(MenuService);
  menu$ = this.service.menuItems$;
  displayedColumns = ['id', 'name', 'price', 'category', 'actions'];

  openDialog(item?: MenuItem) {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      data: item ? { ...item } : { name: '', price: 0, category: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      item ? this.service.update(result) : this.service.add(result);
    });
  }

  delete(id: number) {
    this.service.delete(id);
  }
}
