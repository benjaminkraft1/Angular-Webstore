import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsList: Product[] = [];
  nItems:  BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(product: Product) {
    this.productsList.push(product);
    this.nItems.next(this.getNumberOfItems());
  }

  getCart() {
    this.getNumberOfItems()
    return this.productsList;
  }

  getNumberOfItems() {
    let x = 0;
    for (let i in this.productsList) { 
      x = x + this.productsList[i].quantity;
    }
    return x;
  }

  getTotalPrice() {
    let x = 0;
    for (let i in this.productsList) { 
      x = x + this.productsList[i].quantity * this.productsList[i].price;
    }
    return x;
  }

  clearCart() {
    this.productsList = [];
    return this.productsList;
  }
}