import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { TestComponent } from './TestComponent/test.component';
import { PageNotFoundComponent } from './PageNotFound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Test', component: TestComponent },
    { path: '**', component: PageNotFoundComponent }
];  