import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product/book-details/product-details.component';
import { CartViewComponent } from './product/cart-view/cart-view.component';
import { RegisterComponent } from './auth/register/register.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ProductListComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    CartViewComponent,
    RegisterComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
