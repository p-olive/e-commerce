import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ProductShelfComponent } from './main-container/product-shelf/product-shelf.component';
import { ProductComponent } from './main-container/product-shelf/product/product.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './main-container/shopping-cart/shopping-cart.component';
import { ProductsInCartComponent } from './main-container/shopping-cart/products-in-cart/products-in-cart.component';

const appRoutes: Routes = [
  { path: 'home', component: ProductShelfComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ProductShelfComponent,
    ProductComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductsInCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
