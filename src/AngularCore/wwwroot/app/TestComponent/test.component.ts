import { Component } from '@angular/core';
import { ProductService } from '../Services/products.service';
import { Http } from '@angular/http';

@Component({
    selector: 'test-app',
    templateUrl: './app/Layouts/test.layout.html',
    providers: [ProductService]
})
export class TestComponent {
    Name: string = "Test";
    Status: boolean = true;
    Products: any[];
    apiValues: string[] = [];

    constructor(private _httpService: Http, private _productService: ProductService) {
    }

    ngOnInit() {
        this.Products = this._productService.getproducts();
        this.getPosts();
    }

    getPosts(): void {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }


    sayMyName() {
        window.alert('My name is ' + this.Name)
    }

    clicked() {
        this.Status = !this.Status;
    }
}  