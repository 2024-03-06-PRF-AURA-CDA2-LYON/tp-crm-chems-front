import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { CommonModule } from '@angular/common';
import { Orders } from '../interface/orders.interface';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail-component.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class OrderDetailComponent implements OnInit {
  orderId: number | null = null;
  order: Orders[] = [];

  constructor(private route: ActivatedRoute, private orderService: OrdersService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderId = Number(id);
      this.orderService.getOrdersbyId(this.orderId).subscribe(data => {
        this.order = [data]; // Mettre à jour la propriété orders
      });
    }
  }
}
