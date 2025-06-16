import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">🍽 Restaurant App</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/admin" routerLinkActive="active-link">Admin</a>
      <a mat-button routerLink="/menu" routerLinkActive="active-link">Menu</a>
      <a mat-button routerLink="/restaurant" routerLinkActive="active-link">Restaurants</a>
      <a mat-button routerLink="/assign-menu" routerLinkActive="active-link">Assign Menu</a>
      <a mat-button routerLink="/user" routerLinkActive="active-link">Order</a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {}
