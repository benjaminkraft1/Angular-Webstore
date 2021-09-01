import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  productsList: Product[] = [];
  updatedProductsList = new BehaviorSubject<Product[]>([]);
  nItems = new BehaviorSubject<number>(0);
  totalPrice = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(product: Product) {
    let productExists: Product | undefined = this.productsList.find(p => p.id == product.id);
    if (productExists) {
      productExists.quantity += product.quantity;
    } else {
      this.productsList.push(product);
    }

    this.updatedProductsList.next(this.productsList)
    this.nItems.next(this.getNumberOfItems());
    this.totalPrice.next(this.getTotalPrice());
  }

  removeFromCart(product: Product) {
    product.quantity = 1;
    this.productsList = this.productsList.filter(p => p !== product);
    this.nItems.next(this.getNumberOfItems());
    this.totalPrice.next(this.getTotalPrice());
    this.updatedProductsList.next(this.productsList)
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
}