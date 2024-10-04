import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './interface/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8080/api/orders';

  gerOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.apiUrl}`)
  }
  getOrdersbyId(id: number): Observable<Orders> {
    return this.http.get<Orders>(`${this.apiUrl}/${id}`);
  }

  createOrders(item: Orders): Observable<Orders> {
    return this.http.post<Orders>(this.apiUrl, item);
  }

  updateOrders(id: number, item: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.apiUrl}/${id}`, item);
  }

  deleteOrders(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
