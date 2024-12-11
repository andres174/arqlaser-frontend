import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';
import { initFlowbite } from 'flowbite';
import { AppLayoutUserComponent } from './userLayout/app-layout-user/app-layout-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppLayoutModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arqlaser-frontend';
  ngOnInit(){
    initFlowbite();
  }
}
