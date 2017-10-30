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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var ValueAPIService = /** @class */ (function () {
    function ValueAPIService(http) {
        this.http = http;
        //constructor(private _http: Http) {
        //    this.actionUrl = 'http://localhost:43355/api/values/';
        //}
        this._postsURL = "http://localhost:43355/api/values/";
    }
    ValueAPIService.prototype.getPosts = function () {
        return this.http
            .get(this._postsURL)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(this.handleError);
    };
    ValueAPIService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.statusText);
    };
    ValueAPIService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ValueAPIService);
    return ValueAPIService;
}());
exports.ValueAPIService = ValueAPIService;
//# sourceMappingURL=valueAPI.service.js.map