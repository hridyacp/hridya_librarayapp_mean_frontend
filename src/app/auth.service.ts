import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //server_address:String = '/api';
 server_address:String = 'http://localhost:5100';
  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
   }
  getRole(){
   return !!localStorage.getItem('role'); 
  }
}
