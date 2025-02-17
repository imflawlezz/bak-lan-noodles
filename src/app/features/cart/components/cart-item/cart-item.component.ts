import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item: any; // Данные блюда
  @Output() updateQuantity = new EventEmitter<{ id: number; change: number }>();
  @Output() removeItem = new EventEmitter<number>();

  increaseQuantity() {
    this.updateQuantity.emit({ id: this.item.id, change: 1 });
  }

  decreaseQuantity() {
    if (this.item.quantity > 1) {
      this.updateQuantity.emit({ id: this.item.id, change: -1 });
    }
  }

  removeFromCart() {
    this.removeItem.emit(this.item.id);
  }

  get totalPrice(): number {
    return this.item.quantity * this.item.price;
  }
}
