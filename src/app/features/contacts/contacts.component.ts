import { Component } from '@angular/core';
import {NavComponent} from '../../shared/components/nav/nav.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [
    NavComponent,
    RouterOutlet
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
