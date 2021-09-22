import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewauthorComponent } from './addnewauthor/addnewauthor.component';
import { AddnewbookComponent } from './addnewbook/addnewbook.component';
import { AuthGuard } from './auth.guard';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoleadGuard } from './rolead.guard';
import { SignupComponent } from './signup/signup.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',canActivate:[AuthGuard], component:BooksComponent},
 {path:'book',canActivate:[AuthGuard],component:BookComponent},
  {path:'authors',canActivate:[AuthGuard],component:AuthorsComponent},
  {path:'author',canActivate:[AuthGuard],component:AuthorComponent},
  {path:'newbook',canActivate:[AuthGuard,RoleadGuard],component:AddnewbookComponent},
  {path:'newauthor',canActivate:[AuthGuard,RoleadGuard],component:AddnewauthorComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'updatebook',canActivate:[AuthGuard,RoleadGuard],component:UpdateBookComponent},
  {path:'updateauthor',canActivate:[AuthGuard,RoleadGuard],component:UpdateAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
