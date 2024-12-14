import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm= signal<FormGroup>(
      new FormGroup({
        nombre: new FormControl('',[Validators.required,]),
        apellido: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.minLength(8), Validators.required]),
      })
    )

   constructor(
      private authService:AuthService,
      private router:Router,
    ){}
  
    ngOnInit(){
  
    }

    register(){
      if (this.registerForm().valid) {
        console.log('entro')
            this.authService.Register(this.registerForm().value).subscribe({
              next:(res) =>{
                console.log(res)
                this.authService.guardarToken(res)
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: res.message,
                  showConfirmButton: false,
                  timer: 1000
                });
                res.typeUserId==2?this.router.navigate(['']):this.router.navigate(['admin'])
              },
              error: (err)=>{
                console.log(err);
                
              }
            })
          }
         
        }
  

}
