import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-shelf.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product("","","",0);
  @Output() addedToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.addedToCart.emit(this.product);
  }
}
