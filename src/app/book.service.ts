import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import{Observable}from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
books:Book[]=[]
book:Book=new Book();
url="http://localhost:51633/api/books"

  constructor(private http:HttpClient) {}
  getAllBook()
  {
    this.http.get(this.url).toPromise().then(res=>{
      this.books=res as Book[];
    })
  }
postBook()
{
  return this.http.post(this.url,this.book)
}
  puttBook(){
    return this.http.put(this.url+'/'+this.book.id,this.book)
}
DeleteBook(id:number)
{
 return this.http.delete(this.url+'/'+id)
}


  
    
  
}
