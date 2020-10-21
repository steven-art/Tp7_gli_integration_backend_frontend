import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, CardServiceRes, ICard } from './card';
import { MyCardComponent } from './my-card/my-card.component';

@Injectable({
  providedIn: 'root',
})
export class CardAPIServiceService {
  constructor(private http: HttpClient) {}

  getCards(libelle: string): Observable<CardServiceRes> {
    return this.http.get<CardServiceRes>(
      'http://localhost:8080/card/get-by-libelle/' + libelle
    );
  }
  getCardInfo(id: string): Observable<ICard> {
    return this.http.get<ICard>('http://localhost:8080/card/' + id + '/');
  }

  createCard(
    libelle: string,
    url: string,
    note: string
  ): Observable<CardServiceRes> {
    return this.http.post<CardServiceRes>(
      'http://localhost:8080/card/create?libelle=' +
        libelle +
        '&url=' +
        url +
        '&note=' +
        note,
      Card
    );
  }
  deleteCard(id: string): Observable<{}> {
    const url = 'http://localhost:8080/card/delete?id=' + id; // DELETE api/heroes/42

    return this.http.delete(url);
  }
}
