import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: "first item",
      description: "Test Description 1",
      price: 1.10,
      image: "https://www.stammel.de/wp-content/uploads/2019/01/tshirt-2.jpg",
      quantity: 1
    },
    {
      id: 2,
      name: "second item",
      description: "Test Description 2",
      price: 2.20,
      image: "https://www.stammel.de/wp-content/uploads/2019/01/tshirt-2.jpg",
      quantity: 1
    },
    {
      id: 3,
      name: "third item",
      description: "Test Description 3",
      price: 3.30,
      image: "https://www.stammel.de/wp-content/uploads/2019/01/tshirt-2.jpg",
      quantity: 1
    }
  ];

  constructor() { }


  getProducts() {
    return this.products
  }

  getProductById(id: number): Product {
    const found: Product | undefined = this.products.find(p => p.id == id);
    if (found) return found;
    else return new Product();
  }
}
