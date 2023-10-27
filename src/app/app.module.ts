import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, StoreModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
