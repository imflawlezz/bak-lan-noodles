import {Component, Input} from '@angular/core';
import {CartService} from '../../../core/services/cart.service';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() dish: any;

  constructor(private cartService: CartService) {}

  toggleCart() {
    if (this.cartService.isInCart(this.dish)) {
      this.cartService.removeFromCart(this.dish);
    } else {
      this.cartService.addToCart(this.dish);
    }
  }

  isInCart(): boolean {
    return this.cartService.isInCart(this.dish);
  }
}
