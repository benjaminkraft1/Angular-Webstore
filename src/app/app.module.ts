import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductItemDetailsComponent } from './product-list/product-item-details/product-item-details.component';
import { ConfirmationComponent } from './cart/confirmation/confirmation.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    ConfirmationComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
