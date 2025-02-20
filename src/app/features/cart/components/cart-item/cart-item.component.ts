import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() dish: any; // Данные блюда
  @Output() updateQuantity = new EventEmitter<{ id: number; change: number }>();
  @Output() removeItem = new EventEmitter<number>();

  increaseQuantity() {
    this.updateQuantity.emit({ id: this.dish.id, change: 1 });
  }

  decreaseQuantity() {
    if (this.dish.quantity > 1) {
      this.updateQuantity.emit({ id: this.dish.id, change: -1 });
    }
  }

  removeFromCart() {
    this.removeItem.emit(this.dish.id);
  }

  get totalPrice(): number {
    return this.dish.quantity * this.dish.price;
  }
}
