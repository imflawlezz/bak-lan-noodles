import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {MenuComponent} from './features/menu/menu.component';
import {ContactsComponent} from './features/contacts/contacts.component';
import {CartComponent} from './features/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'cart', component: CartComponent }
];
