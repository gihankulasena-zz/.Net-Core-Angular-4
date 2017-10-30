import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Routes } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { TestComponent } from './TestComponent/test.component';
import { PageNotFoundComponent } from './PageNotFound.component'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule],
    declarations: [AppComponent, PageNotFoundComponent, HomeComponent, TestComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
