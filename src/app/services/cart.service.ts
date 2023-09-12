import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
  }
  
  remove(book: Book) {
    const index = this.cart.indexOf(book);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  get() {
    return this.cart;
  }
}
