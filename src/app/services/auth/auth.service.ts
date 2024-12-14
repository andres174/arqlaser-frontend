import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
  
})
export class AuthService {

  constructor( private http: HttpClient) { }

  Login(form:any){
    return this.http.post<any>(`${environment.urlApi}arq/login`,form)
  }

  async guardarToken(response: any) {
    localStorage.clear()
    localStorage.setItem('token', response.accesToken)
    localStorage.setItem('typeUserId', response.typeUserId.toString())
    localStorage.setItem('id', response.id.toString())
    localStorage.setItem('userName', response.userName)
    localStorage.setItem('email', response.email)
    localStorage.setItem('celular', response.celular)
  }

  Register(form:any){
    return this.http.post<any>(`${environment.urlApi}arq/user`,form)
  }

}
