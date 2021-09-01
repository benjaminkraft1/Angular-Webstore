import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productsList$: Observable<Product[]> = new Observable<Product[]>();
  full_name: string = "";
  adress: string = "";
  credit_card: string = "";
  nItems$: Observable<number> = new Observable<number>();
  total$: Observable<number> = new Observable<number>();


  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void { 
    this.productsList$ = this.cartService.updatedProductsList;
    this.nItems$ = this.cartService.nItems;
    this.total$ = this.cartService.totalPrice;
  }

  onSubmit(): void {
    this.router.navigateByUrl("/confirm");
  }

}