import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:String ="Author"
authorItem={
   author: '',
  book: '',
   genre: '',
  info: '',
   image: '',
   imagepath:''
}
  constructor(public libraryService:LibrarydataService, public _auth:AuthService,  private router:Router) { }

  ngOnInit(): void {
    let authorId=localStorage.getItem('editAuthorId');
    this.libraryService.getAuthor(authorId)
    .subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
      console.log(this.authorItem);
    })
  }
  editAuthor(authorItem:any){
    localStorage.setItem('editBookId',authorItem._id.toString());
    this.router.navigate(['updateauthor']);
    }
    deleteAuthor(authorItem:any)
{
  this.libraryService.deleteAuthor(authorItem._id)
    .subscribe((data) => {
      //this.bookItem = this.bookItem.filter(p:any => p !== bookItem);
      this.router.navigate(['authors'])
    })
  }
  role= localStorage.getItem('role')
}
