import { Component } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private repository:ProductRepository) { }

  selectedCategory:string |undefined
get products(): Product[] {
  return this.repository.getProducts(this.selectedCategory);
}

get categories(): string[] {
  return this.repository.getCategories();
}

changeCategory(newCategory?: string) {
  this.selectedCategory = newCategory;
}

}
