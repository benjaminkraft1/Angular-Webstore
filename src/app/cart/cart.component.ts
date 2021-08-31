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
  full_name: string = "";
  adress: string = "";
  credit_card: number = NaN;
  nItems: number = NaN;
  total: number = NaN;


  constructor(private cartService: CartService) { }

  ngOnInit(): void { 
    this.productsList = this.cartService.getCart();
    this.nItems = this.cartService.getNumberOfItems();
    this.total = this.cartService.getTotalPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.productsList = [];
  }

  onSubmit(): void {
    alert(`${this.full_name} has submitted the odrder successfully!`);
  }

}