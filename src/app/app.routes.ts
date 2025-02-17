import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {MenuComponent} from './features/menu/menu.component';
import {ContactsComponent} from './features/contacts/contacts.component';
import {CartComponent} from './features/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
];
