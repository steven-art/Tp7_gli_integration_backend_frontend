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
  libelle: string;
  Createlibelle = '';
  searchCardUrl = '';
  searchCardNote = '';
  deleteCardId: number;
  cards: Card[] = [];
  cardDetail: ICard;

  constructor(private cardService: CardAPIServiceService) {
    this.cards.push(
      new Card(this.Createlibelle, this.searchCardUrl, this.searchCardNote)
    );
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.cardService.getCards(this.libelle).subscribe((data) => {
      data.results.forEach((e) => {
        this.cards.push(new Card(e.libelle, e.url, e.note));
      });
    });
  }

  searchCard(): void {
    console.log(this.libelle);
    if (this.libelle !== '') {
      this.cardService
        .getCardInfo(this.libelle)
        .subscribe((data) => (this.cardDetail = data));
    }
  }

  deleteCardButton(): void {
    if (this.deleteCardId !== null) {
      this.cardService.deleteCard(this.deleteCardId);
    }
    console.log(this.deleteCardId);
  }

  createCardButton(): void {
    this.cardService.createCard(
      this.Createlibelle,
      this.searchCardUrl,
      this.searchCardNote
    );
  }
}
