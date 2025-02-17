import { Component } from '@angular/core';
import {DishCardComponent} from '../../shared/components/dish-card/dish-card.component';
import {NgForOf} from '@angular/common';
import {NavComponent} from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-home',
  imports: [
    DishCardComponent,
    NgForOf,
    NavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredDishes = [
    {
      name: 'Shrimp Noodles',
      description: 'Nice and fishy',
      price: 10.99,
      image: '/assets/images/shrimp.png',
    },
    {
      name: 'Spicy Noodles',
      description: 'Hot stuff!',
      price: 8.99,
      image: '/assets/images/spicy.png',
    },
    {
      name: 'Mushroom Noodles',
      description: 'The legal ones',
      price: 9.99,
      image: '/assets/images/mushroom.png',
    }
  ];
}

