import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../product-shelf/product-shelf.component';

@Component({
  selector: 'app-products-in-cart',
  templateUrl: './products-in-cart.component.html',
  styleUrls: ['./products-in-cart.component.css']
})
export class ProductsInCartComponent implements OnInit {

  @Input() product: Product = new Product("","","",0);
  @Output() removedFromCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(): void {
    this.removedFromCart.emit(this.product);
  }
}
