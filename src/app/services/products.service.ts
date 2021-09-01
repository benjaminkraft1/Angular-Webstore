import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {this.products = data})
   }

  getJSON(): Observable<any> {
    return this.http.get("../assets/data.json");
  }

  getProducts() {
    return this.products
  }

  getProductById(id: number): Product {
    const found: Product | undefined = this.products.find(p => p.id == id);
    if (found) return found;
    else return new Product();
  }
}
