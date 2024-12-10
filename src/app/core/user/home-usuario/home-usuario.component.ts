import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-home-usuario',
  standalone: true,
  imports: [],
  templateUrl: './home-usuario.component.html',
  styleUrl: './home-usuario.component.css'
})
export class HomeUsuarioComponent {

  ngOnInit(){
    initFlowbite();
  }

}
