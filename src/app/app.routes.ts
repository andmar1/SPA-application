import { RouterModule, Routes } from "@angular/router";
import { Component } from '@angular/core';

const app_routes: Routes = [
    { path:'routePath', component:Component},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes);