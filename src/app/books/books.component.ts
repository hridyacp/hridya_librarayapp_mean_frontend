import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../librarydata.service';
import { BookModel } from './BookModel';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
title: String = "Books";
books! : BookModel[];
  constructor(private bookservice:LibrarydataService, private router:Router) { }

  ngOnInit(): void {
    this.bookservice.getBookdata()
    .subscribe((data)=>{
      this.books= JSON.parse(JSON.stringify(data));
      console.log(this.books);
    })
  }
  getBooks(book:any){
    localStorage.setItem('editBookId',book._id.toString());
    this.router.navigate(['book']);
  }
}
