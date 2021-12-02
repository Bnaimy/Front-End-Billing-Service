import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BillComponent } from './bill/bill.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { BillItemComponent } from './bill-item/bill-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BillComponent,
    ClientComponent,
    ProductComponent,
    BillItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
