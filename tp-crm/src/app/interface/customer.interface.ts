import { Order } from "./orders.interface";

export interface Customer {
    id: number;
    companyName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    country: string;
    city: string;
    state: number;
    orders?: Order[];
}