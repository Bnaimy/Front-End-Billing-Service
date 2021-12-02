import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { BillComponent } from './bill/bill.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillItemComponent } from './bill-item/bill-item.component';

const routes: Routes = [
  { path: 'bill', component: BillComponent },
  { path: 'product', component: ProductComponent },
  { path: 'client', component: ClientComponent },
  { path: 'detailBill/:id', component: BillItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
