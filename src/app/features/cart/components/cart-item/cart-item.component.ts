import { Component, Input } from '@angular/core';
import { CartService, CartItem } from '../../../../core/services/cart.service';
import { DecimalPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  imports: [
    DecimalPipe,
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) {}

  increaseQuantity() {
    this.cartService.increaseQuantity(this.item.name);
  }

  decreaseQuantity() {
    this.cartService.decreaseQuantity(this.item.name);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.item.name);
  }

}
