import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/product.interface';

@Injectable()
export class ProductService {
    products: IProduct[] = [
        {
            Id: 1,
            ProductName: "Product 1",
            ProductPrice: "1.00"
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

    getproducts() {
        return this.products;
    }
}