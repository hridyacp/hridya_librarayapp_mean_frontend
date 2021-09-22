import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LibrarydataService } from '../librarydata.service';
import { SignupModel } from '../signup/SignupModel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,public lib:LibrarydataService, private router:Router) { }
  
  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
    
}
