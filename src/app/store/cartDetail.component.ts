import { Component } from "@angular/core";
import {CartService} from "../model/cart.service";
@Component({
  templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
  constructor(public cart: CartService) { }
}
