import { Component,OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  constructor (public servic:BookService) {
    
  }
  Update(item:Book)
  {
    this.servic.book.id=item.id;
    this.servic.book.title=item.title
    this.servic.book.author=item.author
    this.servic.book.numberOfPage=item.numberOfPage
    this.servic.book.publishedAt=item.publishedAt
  }
  ngOnInit(): void {
    this.servic.getAllBook()
  }
  Delete(id:number)
  {if(confirm('Are You Sure'))
    this.servic.DeleteBook(id).subscribe({
      next:(res)=>{
        this.servic.getAllBook();
      }
    })
  }
}

