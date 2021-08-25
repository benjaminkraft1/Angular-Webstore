import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsList: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.productsList.push(product);
  }

  getCart() {
    return this.productsList;
  }

  clearCart() {
    this.productsList = [];
    return this.productsList;
  }
}