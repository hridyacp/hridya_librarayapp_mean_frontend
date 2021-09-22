import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  title:String ='Update Book'
  images:any
filename:string
url: any = undefined;
  bookItem={
    title: '',
      author: '',
      genre:  '',
    synopsis: '',
     image:  '',
     imagepath:''
}
  constructor(private libraryService:LibrarydataService, private router:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.libraryService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
      this.url=this.bookItem.imagepath
  })
  }
  submitImage(event:any){
    this.images=event.target.files[0]
    this.filename = this.images.name;
    const reader = new FileReader();
    reader.readAsDataURL(this.images);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
}
  editBook()
  {    
    this.bookItem.imagepath=this.url;
    this.bookItem.image=this.filename;
    this.libraryService.editBook(this.bookItem);   
    alert("Updated Successfully");
    this.router.navigate(['books']);
  }
}
