import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './interface/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/customer';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}`);
  }
  getCustomerbyId(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  createCustomer(item: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, item);
  }

  updateCustomer(id: number, item: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, item);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}