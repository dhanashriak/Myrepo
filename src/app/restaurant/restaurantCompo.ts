import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RestaurantDialogComponent } from './restaurant-dialog.component';
import { Restaurant, RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './restaurant.html',
  styleUrls: ['./restaurant.css']
})
export class RestaurantCompo {
  private dialog = inject(MatDialog);
  private service = inject(RestaurantService);
  restaurants$ = this.service.restaurants$;
  displayedColumns = ['id', 'name', 'location', 'cuisine', 'actions'];

  openDialog(restaurant?: Restaurant) {
    const dialogRef = this.dialog.open(RestaurantDialogComponent, {
      data: restaurant ? { ...restaurant } : { name: '', location: '', cuisine: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      restaurant ? this.service.update(result) : this.service.add(result);
    });
  }

  delete(id: number) {
    this.service.delete(id);
  }
}
