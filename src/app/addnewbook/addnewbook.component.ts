import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/BookModel';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {
title:String = "Add New Book"
images:any
filename:String
url: any = undefined;
  constructor(private newbookobj:LibrarydataService, private router:Router) { }
bookItem = new BookModel(null,null,null,null,null,null);

  ngOnInit(): void {
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
addNewbook(){
  this.bookItem.imagepath=this.url;
  this.bookItem.image=this.filename;
  this.newbookobj.newbook(this.bookItem);
  alert("Book added sucessfully");
  this.router.navigate(['/books']);
}
}
