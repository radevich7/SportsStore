import { Component } from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";
import {CartService} from "../model/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private repository:ProductRepository, private cart:CartService, private router:Router) { }

  selectedCategory:string |undefined
  productsPerPage = 4;
  selectedPage = 1;
get products(): Product[] {

    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
}

get categories(): string[] {
  return this.repository.getCategories();
}

changeCategory(newCategory?: string) {
  this.selectedCategory = newCategory;
}
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

}
