import { Component } from '@angular/core';
import { AppNavBarUserComponent } from "../app-nav-bar-user/app-nav-bar-user.component";
import { RouterModule } from '@angular/router';
import { AppFooterUserComponent } from "../app-footer-user/app-footer-user.component";
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-app-layout-user',
  standalone: true,
  imports: [AppNavBarUserComponent, RouterModule, AppFooterUserComponent,],
  templateUrl: './app-layout-user.component.html',
  styleUrl: './app-layout-user.component.css'
})
export class AppLayoutUserComponent {
  ngOnInit(){
    initFlowbite();
  }
}
