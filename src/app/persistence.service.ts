import { Injectable } from '@angular/core';
import { Product } from './main-container/product-shelf/product-shelf.component';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addToLocalStorage(product: Product){
    let shoppingCart: Product[] = JSON.parse(localStorage.getItem("shoppingCart") ?? "[]");
    shoppingCart.push(product);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }

  loadFromLocalStorage(): Product[] {
    return JSON.parse(localStorage.getItem("shoppingCart") ?? "[]");
  }

  loadToLocalStorage(shoppingCart: Product[]){
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }

}
