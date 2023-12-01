import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule}from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookItemComponent } from './book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
