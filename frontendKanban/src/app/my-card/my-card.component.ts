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
  selectedCardLibelle: string;
  searchCardLibelle = '';
  searchCardUrl = '';
  searchCardNote = '';
  deleteCardId = '';
  cards: Card[] = [];
  cardDetail: ICard;

  constructor(private cardService: CardAPIServiceService) {
    this.cards.push(new Card('1', 'card1', 'url1', 'première card'));
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.cardService.getCards(this.libelle).subscribe((data) => {
      data.results.forEach((e, index) => {
        this.cards.push(new Card('' + index, e.libelle, e.url, e.note));
      });
    });
  }

  searchCard(): void {
    if (this.selectedCardLibelle !== '') {
      this.cardService
        .getCardInfo(this.selectedCardLibelle)
        .subscribe((data) => (this.cardDetail = data));
    }
  }

  deleteCardButton(): void {
    if (this.deleteCardId !== '') {
      this.cardService.deleteCard(this.deleteCardId);
    }
  }

  createCardButton(): void {
    this.cardService.createCard(
      this.selectedCardLibelle,
      this.searchCardUrl,
      this.searchCardNote
    );
  }
}
