import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  title:String ='Update Author';
  images:any
filename:string
url: any = undefined;
  authorItem={
    author: '',
      book: '',
      genre:  '',
    info: '',
     image:  '',
     imagepath:''
}
  constructor(private libraryService:LibrarydataService, private router:Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.libraryService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
      this.url=this.authorItem.imagepath;
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
  editAuthor()
  {   
    this.authorItem.imagepath=this.url;
    this.authorItem.image=this.filename; 
    this.libraryService.editAuthor(this.authorItem);   
    alert("Updated Successfully");
    this.router.navigate(['authors']);
  }
}
