import { Component, OnInit } from '@angular/core';

import { Card, ICard } from '../card';
import { CardAPIServiceService } from '../card-apiservice.service';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css'],
  providers: [CardAPIServiceService],
})
export class MyCardComponent {
  libelle = '';
  Createlibelle = '';
  searchCardUrl = '';
  searchCardNote = '';
  deleteCardId = '';
  cards: Card[] = [];
  cardId = '';
  removeCard: string;
  cardCreate: string;
  constructor(private cardService: CardAPIServiceService) {
    this.cards.push(
      new Card(this.Createlibelle, this.searchCardUrl, this.searchCardNote)
    );
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {}

  searchCard(libelle: string): void {
    console.log(this.libelle);
    if (this.libelle !== '') {
      this.cardService
        .getCardInfo(this.libelle)
        .subscribe((data) => (this.cardId = data));
      console.log(this.cardId);
      this.cardId = 'reinitialisation';
    }
  }

  deleteCardButton(deleteCardId: string): void {
    if (deleteCardId !== '') {
      this.cardService
        .deleteCard(this.deleteCardId)
        .subscribe((data) => (this.removeCard = data));
    }
    console.log(this.deleteCardId);
  }

  createCardButton(
    Createlibelle: string,
    searchCardUrl: string,
    searchCardNote: string
  ): void {
    this.cardService
      .createCard(this.Createlibelle, this.searchCardUrl, this.searchCardNote)
      .subscribe((data) => (this.cardCreate = data));
  }
}
