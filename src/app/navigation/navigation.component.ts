import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  nItems: number = 0;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartService.nItems.subscribe(items => this.nItems = items);
  }

}
