import { RouterModule, Routes } from '@angular/router';
import { SEAScontainer } from './SEASContainer/SEAS.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
        path: 'SEAS',
        component: SEAScontainer
    },
    {
        path: '', redirectTo:'./app.component', pathMatch:'full'
    },
    {
        path: 'HOME', redirectTo:'./app.component',pathMatch:'full'
    }
];
export class AppRoutingModule
{}
