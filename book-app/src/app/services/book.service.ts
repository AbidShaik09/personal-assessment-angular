import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:Array<Book> = []
  constructor() { }

  getBooks():Array<Book>{
    return this.books;

  }
  newBook(book:Book){
    this.books.push(book)
  }
}
