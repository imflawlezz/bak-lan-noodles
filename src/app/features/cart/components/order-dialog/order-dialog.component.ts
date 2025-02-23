import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./../dialog.component.scss']
})
export class OrderDialogComponent {
  name = '';
  surname = '';
  address = '';
  paymentMethod = 'card';

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>) {}

  submitOrder() {
    if (this.name && this.surname && this.address) {
      this.dialogRef.close({
        name: this.name,
        surname: this.surname,
        address: this.address,
        paymentMethod: this.paymentMethod
      });
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
