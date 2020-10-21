export interface CardServiceRes {
  results: Card;
  count: number;
  next: string;
  previous: ICard[];
}

export interface ICard {
  libelle: string;
  url: string;
  note: string;
}

export class Card {
  [x: string]: any;
  constructor(
    public id: string,
    public libelle: string,
    public url: string,
    public note: string
  ) {}
}
