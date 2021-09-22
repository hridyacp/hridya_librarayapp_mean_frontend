import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class LibrarydataService {
//server_address:String = '/api';
server_address:String = 'http://localhost:5100';
  constructor(private http:HttpClient) { }

  getBook(id:any){
return this.http.get(`${this.server_address}/`+id);
  }
   getAuthor(id:any){
return this.http.get(`${this.server_address}/author/`+id);
  }
  getBookdata(){
    return this.http.get(`${this.server_address}/books`);
  }
  getAuthordata(){
    return this.http.get(`${this.server_address}/authors`)
  }
  newbook(item:any){
    return this.http.post(`${this.server_address}/newbook`,{"book":item})
    .subscribe(data=>{console.log(data)});
  }
  newauthor(item:any){
    return this.http.post(`${this.server_address}/newauthor`,{"author":item})
    .subscribe(data=>{console.log(data)});
  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/update`,book)
    .subscribe(data =>{console.log(data)})
  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/updateauthor`,author)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any){
    return this.http.delete(`${this.server_address}/removebook/`+id)
  }
  deleteAuthor(id:any){
    return this.http.delete(`${this.server_address}/removeauthor/`+id)
  }
  signup(item:any){
return this.http.post(`${this.server_address}/signup`,{'signup':item})
}

}