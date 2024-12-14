import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm= signal<FormGroup>(
    new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.minLength(8), Validators.required]),
    })
  )
  formStatus: boolean = true


  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  ngOnInit(){

  }

  login() {
    if (this.loginForm().valid) {
      this.authService.Login(this.loginForm().value).subscribe({
        next:(res) =>{
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
