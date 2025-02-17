import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf,
    RouterLinkActive
  ],
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() darkBackground: boolean = false;
}
