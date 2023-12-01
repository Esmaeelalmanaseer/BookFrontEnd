import { Component,OnInit } from '@angular/core';
import { BookService } from '../book.service';
import{NgForm}from '@angular/forms'
import { Book } from '../book.model';
import{BookListComponent}from'../book-list/book-list.component'

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{

  constructor (public service:BookService) {
    
  }
  
  
  ngOnInit(): void {

  }

  submit()
  {
    if(this.service.book.id==0)
    {
    this.service.postBook().subscribe({
      next:(res)=>{
      this.service.getAllBook()
      },error:(err)=>{
        console.log(err)
      }
    })
  }else
  {
    this.service.puttBook().subscribe({
      next:(res)=>{
        this.service.getAllBook()
      },error:(err)=>{
        console.log(err)
      }
    })
  }
  }
}
