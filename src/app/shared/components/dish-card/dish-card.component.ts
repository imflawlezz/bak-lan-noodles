import { Component, Input } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() dish!: { name: string; description: string; price: number; image: string };

  constructor(private cartService: CartService) {}

  isInCart(): boolean {
    return this.cartService.isInCart(this.dish.name);
  }

  toggleCart() {
    if (this.isInCart()) {
      this.cartService.removeFromCart(this.dish.name);
    } else {
      this.cartService.addToCart(this.dish);
    }
  }
}
