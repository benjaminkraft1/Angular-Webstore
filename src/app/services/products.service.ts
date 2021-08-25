import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 1,
        name: "first item",
        description: "Test Description 1",
        price: 1.10,
        img: "xx"
      },
      {
        id: 2,
        name: "second item",
        description: "Test Description 2",
        price: 2.20,
        img: "xx"
      },
      {
        id: 3,
        name: "third item",
        description: "Test Description 3",
        price: 3.30,
        img: "xx"
      }
    ]
  }
}
