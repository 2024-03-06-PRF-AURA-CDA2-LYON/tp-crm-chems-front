import { OrdersService } from './../orders.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Orders } from '../interface/orders.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  orders: Orders[] = [];

  constructor(private ordersService: OrdersService){}

  ngOnInit(): void{
    this.ordersService.gerOrders().subscribe((data: Orders[])=>{
      this.orders = data;
    })
  }
}