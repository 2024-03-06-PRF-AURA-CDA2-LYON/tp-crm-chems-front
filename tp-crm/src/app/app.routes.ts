import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';

export const routes: Routes = [
    { path: 'customers', component: CustomerComponent },
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent },
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
];