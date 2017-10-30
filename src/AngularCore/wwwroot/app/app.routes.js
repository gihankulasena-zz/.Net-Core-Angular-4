"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./HomeComponent/home.component");
var test_component_1 = require("./TestComponent/test.component");
var PageNotFound_component_1 = require("./PageNotFound.component");
exports.routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'Test', component: test_component_1.TestComponent },
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map