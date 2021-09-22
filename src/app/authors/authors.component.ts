import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../librarydata.service';
import { AuthorModel } from './AuthorModel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
title: String ="Authors";
authors! : AuthorModel[];
  constructor(private authorobj:LibrarydataService, private router:Router) { }

  ngOnInit(): void {
    this.authorobj.getAuthordata()
    .subscribe((data)=>{
      this.authors= JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    })
  }
getAuthors(author:any){
  localStorage.setItem('editAuthorId',author._id.toString());
  this.router.navigate(['author']);
}
}
