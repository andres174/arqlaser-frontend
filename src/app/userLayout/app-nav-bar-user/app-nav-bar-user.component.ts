import { UserData } from './../../interfaces/user-data';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-nav-bar-user',
  standalone: true,
  imports: [],
  templateUrl: './app-nav-bar-user.component.html',
  styleUrl: './app-nav-bar-user.component.css'
})
export class AppNavBarUserComponent {
  
  constructor(
    private router: Router
  ){
  }

  ngOnInit(){
  }

}
