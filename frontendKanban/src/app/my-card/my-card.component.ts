import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css'],
})
export class MyCardComponent {
  cards: Card[] = [];

  constructor() {
    this.cards.push(new Card('1', 'card1', 'url1', 'première card'));
  }
}
