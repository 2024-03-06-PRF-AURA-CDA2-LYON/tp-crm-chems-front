import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from '../interface/customer.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-detail-component.component.html',
  styleUrls: ['./customer-detail-component.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerId: number | null = null;
  customer: Customer | null = null;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerId = Number(id);
      this.customerService.getCustomerbyId(this.customerId).subscribe(data => {
        this.customer = data;
      });
    }
  }
}
