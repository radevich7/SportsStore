import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import {CartService} from "./cart.service";
@NgModule({
  providers: [ProductRepository, StaticDataSource,CartService]
})
export class ModelModule { }
