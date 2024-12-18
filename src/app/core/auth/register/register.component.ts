import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  registerForm!: FormGroup
  statusForm: Boolean = true
  showPassword: boolean = false;
   constructor(
      private authService:AuthService,
      private router:Router,
      private formBuilder: FormBuilder
    ){
      this.buildForm()
    }
     
    
  
    ngOnInit(){
      this.statusForm=true
    }



    buildForm(){
      this.registerForm = this.formBuilder.group({
        nombre:['',[Validators.required,]],
        apellido:['',[Validators.required,]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/)]],
      })
    }

    changeVisibility() {
      this.showPassword = !this.showPassword; 
    }

    register(){
      if (this.registerForm.valid) {
        console.log('entro')
            this.authService.Register(this.registerForm.value).subscribe({
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
          else{
            this.statusForm=false
          }
         
        }
 get getControls() {
          return this.registerForm.controls
  }

}
