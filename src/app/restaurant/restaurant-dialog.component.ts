import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Restaurant } from './restaurant.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-restaurant-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>{{ data.id ? 'Edit' : 'Add' }} Restaurant</h2>
    <mat-dialog-content>
      <mat-form-field appearance="fill" class="full">
        <mat-label>Name</mat-label>
        <input matInput [(ngModel)]="data.name">
      </mat-form-field>

      <mat-form-field appearance="fill" class="full">
        <mat-label>Location</mat-label>
        <input matInput [(ngModel)]="data.location">
      </mat-form-field>

      <mat-form-field appearance="fill" class="full">
        <mat-label>Cuisine</mat-label>
        <input matInput [(ngModel)]="data.cuisine">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-raised-button color="primary" (click)="dialogRef.close(data)">Save</button>
    </mat-dialog-actions>
  `,
  styles: [`.full { width: 100%; margin-top: 12px; }`]
})
export class RestaurantDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Restaurant,
    public dialogRef: MatDialogRef<RestaurantDialogComponent>
  ) {}
}
