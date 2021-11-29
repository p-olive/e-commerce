import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {

  public silverArrow: Product = new Product ("1", "Silver Arrow", "Descrição", 1200);
  public shootingStar: Product = new Product ("2", "Shooting Star", "Descrição", 1300);
  public cometTwoNinety: Product = new Product ("3", "Comet Two Ninety", "Descrição", 1500);
  public nimbus2000: Product = new Product ("4", "Nimbus 2000", "Descrição", 2000);
  public nimbus2001: Product = new Product ("5", "Nimbus 2001", "Descrição", 3000);
  public firebolt: Product = new Product ("6", "Firebolt", "Descrição", 5000);
  public thunderboltvii: Product = new Product ("7", "Thunderbolt VII", "Descrição", 7000);

  public productShelf: Product[] = [this.silverArrow, this.shootingStar, this.cometTwoNinety, this.nimbus2000, this.nimbus2001, this.firebolt, this.thunderboltvii];

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit(): void {
  }

  handleAddedToCart(product: Product){
    this.persistenceService.addToLocalStorage(product);
    console.log(`${product.name} foi adicionada ao carrinho.`);
  }

}

export class Product{
  id: string;
  name: string;
  description: string;
  price: number;

  constructor(
    id: string, 
    name: string, 
    description: string, 
    price: number
    ){
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
  }
}