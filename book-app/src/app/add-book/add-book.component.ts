import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService} from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book:Book= new Book();
  nameError=false
  authorError=false
  languageError=false
  publishDateError=false
  constructor(private bs:BookService){

  }
  addHandler(){
    console.log(this.book)
    if(this.book.bookName==''){
      alert("Enter a valid book name")
      return;
    }
    if(this.book.authorName==''){
      alert("Enter a valid author name")
      return;
    }
    
    
    if( this.book.publishingYear<=0 || this.book.publishingYear >new Date().getFullYear()){
      alert("Enter a valid year")
      return;
    }
    if(this.book.language==''){
      alert("Enter a valid language")
      return;
    }

    this.bs.newBook(this.book);
    this.book=new Book();

  }
  cancelHandler(){
    this.book = new Book()
  }

}
