import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

 loginForm!: FormGroup
  statusForm: Boolean = true
  showPassword: boolean = false;


  constructor(
    private authService:AuthService,
    private router:Router,
     private formBuilder: FormBuilder,

  ){}

  ngOnInit(){
    this.buildForm()
  }
  buildForm(){
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.Login(this.loginForm.value).subscribe({
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
    else{
      this.statusForm=false
    }
   
  }
  changeVisibility() {
    this.showPassword = !this.showPassword; 
  }

}
