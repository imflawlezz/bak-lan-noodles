import { Component } from '@angular/core';
import { CartService, CartItem } from '../../core/services/cart.service';
import {NavComponent} from '../../shared/components/nav/nav.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {NgForOf} from '@angular/common';
import {CartSummaryComponent} from './components/cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    NavComponent,
    CartItemComponent,
    NgForOf,
    CartSummaryComponent
  ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }
}
