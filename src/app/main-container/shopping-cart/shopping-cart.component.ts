import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';
import { Product } from '../product-shelf/product-shelf.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCart: Product[] = [];

  constructor(private persistenceService: PersistenceService) {
    this.shoppingCart = this.persistenceService.loadFromLocalStorage();
  }

  ngOnInit(): void {
  }

  handleRemovedFromCart(removedProduct: Product){
    this.shoppingCart = this.persistenceService.loadFromLocalStorage();
    this.shoppingCart.filter(product => product != removedProduct);
    this.persistenceService.loadToLocalStorage(this.shoppingCart);
  }

}
