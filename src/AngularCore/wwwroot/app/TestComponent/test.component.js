"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_service_1 = require("../Services/products.service");
var http_1 = require("@angular/http");
var TestComponent = /** @class */ (function () {
    function TestComponent(_httpService, _productService) {
        this._httpService = _httpService;
        this._productService = _productService;
        this.Name = "Test";
        this.Status = true;
        this.apiValues = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.Products = this._productService.getproducts();
        this.getPosts();
    };
    TestComponent.prototype.getPosts = function () {
        var _this = this;
        this._httpService.get('/api/values').subscribe(function (values) {
            _this.apiValues = values.json();
        });
    };
    TestComponent.prototype.sayMyName = function () {
        window.alert('My name is ' + this.Name);
    };
    TestComponent.prototype.clicked = function () {
        this.Status = !this.Status;
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-app',
            templateUrl: './app/Layouts/test.layout.html',
            providers: [products_service_1.ProductService]
        }),
        __metadata("design:paramtypes", [http_1.Http, products_service_1.ProductService])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map