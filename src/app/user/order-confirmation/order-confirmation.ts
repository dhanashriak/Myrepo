import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './order-confirmation.html',
  styleUrls: ['./order-confirmation.css']
})
export class OrderConfirmation implements OnInit {
  orderItems: any[] = [];

  ngOnInit(): void {
    const stored = localStorage.getItem('orderItems');
    this.orderItems = stored ? JSON.parse(stored) : [];
  }

  getTotal() {
    return this.orderItems.reduce((total, item) => total + item.price, 0);
  }
}
