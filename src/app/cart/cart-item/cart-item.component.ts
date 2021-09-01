import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() removeItemFromCart: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
  }

  removeFromCart(): void {
    this.removeItemFromCart.emit(this.product);
    this.cartService.removeFromCart(this.product)
  }

}
