import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent {
  books:Array<Book>=[];
  constructor( bs:BookService ){
    this.books = bs.getBooks()
  }
  
}
