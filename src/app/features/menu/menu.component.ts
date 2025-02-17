import { Component } from '@angular/core';
import {NavComponent} from '../../shared/components/nav/nav.component';
import {DishCardComponent} from '../../shared/components/dish-card/dish-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    NavComponent,
    DishCardComponent,
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuDishes = [
    { name: 'Shrimp Noodles', description: 'Nice and fishy', price: 10.99, image: '/assets/images/shrimp.png' },
    { name: 'Beef Noodles', description: 'Soft and tender', price: 12.49, image: '/assets/images/beef.png' },
    { name: 'Spicy Noodles', description: 'Hot stuff!', price: 8.99, image: '/assets/images/spicy.png' },
    { name: 'Mushroom Noodles', description: 'The legal ones', price: 9.99, image: '/assets/images/mushroom.png' },
    { name: 'Narutomaki Noodles', description: 'Naruto huh', price: 10.99, image: '/assets/images/naruto.png' },
    { name: 'Veggie Noodles', description: 'Given by nature', price: 7.99, image: '/assets/images/veggie.png' },
    { name: 'Fried Spicy Noodles', description: 'Extra spicy', price: 9.49, image: '/assets/images/fried_spicy.png' },
    { name: 'Random Ahh Noodles', description: 'There is a lot', price: 14.99, image: '/assets/images/random.png' }
  ];
}
