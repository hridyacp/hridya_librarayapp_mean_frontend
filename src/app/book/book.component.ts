import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:String = 'Book'
bookItem={
    title: '',
      author: '',
      genre:  '',
    synopsis: '',
     image:  '',
     imagepath:''
}
  constructor(private libraryService:LibrarydataService, public _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
   
    let bookId = localStorage.getItem("editBookId");
    this.libraryService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
      console.log(this.bookItem);
  })
  }
  editBook(bookItem:any){
    localStorage.setItem('editBookId',bookItem._id.toString());
    this.router.navigate(['updatebook']);
    }
    deleteBook(bookItem:any)
{
  this.libraryService.deleteBook(bookItem._id)
    .subscribe((data) => {
      //this.bookItem = this.bookItem.filter(p:any => p !== bookItem);
      this.router.navigate(['books'])
    })
  }
  role= localStorage.getItem('role')
}
