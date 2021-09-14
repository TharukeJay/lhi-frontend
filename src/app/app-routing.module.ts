import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {ShopsComponent} from "./shops/shops.component";
import {BillComponent} from "./bill/bill.component";
import {HistoryComponent} from "./history/history.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path : 'items', component : ItemsComponent},
  {path : 'shops', component : ShopsComponent},
  {path : 'bill', component : BillComponent},
  {path : 'history', component : HistoryComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
