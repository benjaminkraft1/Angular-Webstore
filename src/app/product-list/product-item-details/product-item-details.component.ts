import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity = 1;

  constructor(private cart: CartService, private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = this.productsService.getProductById(params.id);
    });
  }

  addToCart(): void {
    this.cart.addToCart(this.product, this.quantity);
  }

  setQuantity(event: Event): void {
    this.quantity = parseInt( (event.target as HTMLSelectElement).value);
  }

  
}
