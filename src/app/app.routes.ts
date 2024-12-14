import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { HomeComponent } from './core/admin/home/home.component';
import { HomeUsuarioComponent } from './core/user/home-usuario/home-usuario.component';
import { AppLayoutUserComponent } from './userLayout/app-layout-user/app-layout-user.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { adminGuardGuard } from './guards/admin-guard.guard';
import { userGuardGuard } from './guards/user-guard.guard';

export const routes: Routes = [
    {
        path: 'admin',
        canActivate:[adminGuardGuard],
        component: AppLayoutComponent,
        children:[
            { path:'', component:HomeComponent }
        ],
        
    },
    {
        path:'',
        canActivate:[userGuardGuard],
        component: AppLayoutUserComponent,
        children:[
            {path:'', component:HomeUsuarioComponent}
        ] 
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'registro',
        component:RegisterComponent
    }

];
