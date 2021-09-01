import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor(private cart: CartService, private products: ProductsService) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cart.addToCart(this.product);
  }

  setQuantity(event: Event): void {
    this.product.quantity = parseInt( (event.target as HTMLSelectElement).value);
  }
}
