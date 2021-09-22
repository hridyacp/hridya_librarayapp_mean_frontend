import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LibrarydataService } from '../librarydata.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title:String ="Log In";
showPassword :boolean =false;
error:any
user={email:'',password:''};
  constructor(private loginobj:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  password_show_hide(){
    this.showPassword = !this.showPassword;  
  }
  userLog(){
   this.loginobj.login(this.user)
   .subscribe(
    (res)=>{
    localStorage.setItem('token',res.token);
    if(res.role=="admin"){
    localStorage.setItem('role',res.role);
    }
     this.router.navigate(['/']);
     alert('Login sucessfull');
    }
    ,(err)=>{
      this.error="Email and password dont match. If not a user please sign up"
    }
  )
  }
}
