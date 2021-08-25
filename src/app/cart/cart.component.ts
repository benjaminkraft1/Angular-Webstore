import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productsList: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void { 
    this.productsList = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.productsList = [];
  }

}