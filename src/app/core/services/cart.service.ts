import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Здесь храним блюда в корзине

  addToCart(dish: any) {
    if (!this.isInCart(dish)) {
      this.cartItems.push(dish);
    }
  }

  removeFromCart(dish: any) {
    this.cartItems = this.cartItems.filter(item => item.name !== dish.name);
  }

  isInCart(dish: any): boolean {
    return this.cartItems.some(item => item.name === dish.name);
  }
}
