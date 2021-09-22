import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddnewbookComponent } from './addnewbook/addnewbook.component';
import { AddnewauthorComponent } from './addnewauthor/addnewauthor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator.directive';
import { LibrarydataService } from './librarydata.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    AddnewbookComponent,
    AddnewauthorComponent,
    LoginComponent,
    SignupComponent,
    BookComponent,
    AuthorComponent,
    UpdateBookComponent,
    UpdateAuthorComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LibrarydataService, AuthService,{
      provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
