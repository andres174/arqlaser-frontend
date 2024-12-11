import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { HomeComponent } from './core/admin/home/home.component';
import { HomeUsuarioComponent } from './core/user/home-usuario/home-usuario.component';
import { AppLayoutUserComponent } from './userLayout/app-layout-user/app-layout-user.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AppLayoutComponent,
        children:[
            { path:'', component:HomeComponent }
        ],
        
    },
    {
        path:'',
        component: AppLayoutUserComponent,
        children:[
            {path:'', component:HomeUsuarioComponent}
        ] 
    }
];
