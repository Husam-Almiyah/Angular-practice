import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Husam',
        image: 'https://m.media-amazon.com/images/I/41UV9-Exb0L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 20,
      },
      {
        name: 'The Self-Taught Programmer',
        author: 'Cory Althoff',
        image: 'https://m.media-amazon.com/images/I/51+Z8QVq+WL.jpg',
        amount: 30,
      },
      {
        name: 'The Self-Taught Programmer',
        author: 'Cory Althoff',
        image: 'https://m.media-amazon.com/images/I/51+Z8QVq+WL.jpg',
        amount: 30,
      },
      {
        name: 'The Self-Taught Programmer',
        author: 'Cory Althoff',
        image: 'https://m.media-amazon.com/images/I/51+Z8QVq+WL.jpg',
        amount: 30,
      }
    ];
  }
}