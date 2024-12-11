import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-app-footer-user',
  standalone: true,
  imports: [],
  templateUrl: './app-footer-user.component.html',
  styleUrl: './app-footer-user.component.css'
})
export class AppFooterUserComponent {
  ngOnInit(){
    initFlowbite();
  }
}
