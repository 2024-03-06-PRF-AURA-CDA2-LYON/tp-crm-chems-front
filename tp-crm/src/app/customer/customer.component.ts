import { Component, OnInit } from '@angular/core';
import { Customer } from '../interface/customer.interface';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
}
