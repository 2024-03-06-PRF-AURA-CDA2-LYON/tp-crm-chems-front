import { OrdersService } from './../orders.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Orders } from '../interface/orders.interface';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Orders[] = [];

  constructor(private ordersService: OrdersService){}

  ngOnInit(): void{
    this.ordersService.gerOrders().subscribe((data: Orders[])=>{
      this.orders = data;
    })
  }
}
