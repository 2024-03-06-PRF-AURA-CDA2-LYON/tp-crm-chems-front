import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail-component/order-detail-component.component';
import { CustomerDetailComponent } from './customer-detail-component/customer-detail-component.component';

export const routes: Routes = [
    { path: 'customers', component: CustomerComponent },
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'orders', component: OrdersComponent },
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: 'orders/:id', component: OrderDetailComponent },
    { path: 'customers/:id', component: CustomerDetailComponent },
];