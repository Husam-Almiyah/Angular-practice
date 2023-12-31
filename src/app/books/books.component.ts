import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [];
  
  constructor(private booksService: BooksService) { }

  ngOnInit() : void {
    this.books = this.booksService.getBooks();
  }

}
