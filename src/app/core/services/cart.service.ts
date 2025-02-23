import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cartItems';
  private cart: CartItem[] = this.loadCartFromStorage();
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);

  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.cartSubject.next(this.cart); // Инициализируем состояние из localStorage
  }

  addToCart(dish: Omit<CartItem, 'quantity'>) {
    const existingItem = this.cart.find(item => item.name === dish.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...dish, quantity: 1 });
    }
    this.updateCart();
  }

  removeFromCart(name: string) {
    this.cart = this.cart.filter(item => item.name !== name);
    this.updateCart();
  }

  increaseQuantity(name: string) {
    const item = this.cart.find(item => item.name === name);
    if (item) {
      item.quantity++;
      this.updateCart();
    }
  }

  decreaseQuantity(name: string) {
    const item = this.cart.find(item => item.name === name);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(name);
      }
      this.updateCart();
    }
  }

  isInCart(name: string): boolean {
    return this.cart.some(item => item.name === name);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.updateCart();
  }

  private updateCart() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    this.cartSubject.next([...this.cart]);
  }

  private loadCartFromStorage(): CartItem[] {
    const storedCart = localStorage.getItem(this.storageKey);
    return storedCart ? JSON.parse(storedCart) : [];
  }
}
