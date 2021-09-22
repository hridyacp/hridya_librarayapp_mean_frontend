import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/AuthorModel';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-addnewauthor',
  templateUrl: './addnewauthor.component.html',
  styleUrls: ['./addnewauthor.component.css']
})
export class AddnewauthorComponent implements OnInit {
title:String = "Add New Author";
images:any
filename:String
url: any = undefined;
  constructor(public newauthorobj:LibrarydataService, private router:Router) { }
  authorItem = new AuthorModel(null,null,null,null,null,null);
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
  addNewauthor(){
    this.authorItem.imagepath=this.url;
  this.authorItem.image=this.filename;
    this.newauthorobj.newauthor(this.authorItem);
    alert("Author added sucessfully")
    this.router.navigate(['/authors']);
  }
}
