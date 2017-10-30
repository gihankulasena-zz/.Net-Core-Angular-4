import { Component } from '@angular/core';
import { IProduct } from '../Interfaces/product.interface';

@Component({
    selector: 'home-app',
    templateUrl: './app/Layouts/home.layout.html'
})
export class HomeComponent {
    products: IProduct[] = [
        {
            Id: 1,
            ProductName: "Product 1",
            ProductPrice: "0.00"

        },
        {
            Id: 2,
            ProductName: "Product 2",
            ProductPrice: "2.00"
        },
        {
            Id: 3,
            ProductName: "Product 3",
            ProductPrice: "3.00"
        }
    ];
}  