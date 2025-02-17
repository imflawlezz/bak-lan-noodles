import { Component } from '@angular/core';
import {NavComponent} from '../../shared/components/nav/nav.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [
    NavComponent,
    CartItemComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
