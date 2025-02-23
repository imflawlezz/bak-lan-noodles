import { Component } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  templateUrl: './cart-summary.component.html',
  imports: [CommonModule],
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {
  totalQuantity = 0;
  totalPrice = 0;

  constructor(private cartService: CartService, private dialog: MatDialog) {
    this.cartService.cart$.subscribe(cart => {
      this.totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      this.totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  clearCart() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Вы уверены, что хотите очистить корзину?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cartService.clearCart();
      }
    });
  }

  placeOrder() {
    const dialogRef = this.dialog.open(OrderDialogComponent);

    dialogRef.afterClosed().subscribe(orderData => {
      if (orderData) {
        console.log('Заказ оформлен:', orderData);
        this.cartService.clearCart();
      }
    });
  }
}
