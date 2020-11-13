import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card, CardServiceRes, ICard } from './card';

@Injectable({
  providedIn: 'root',
})
export class CardAPIServiceService {
  constructor(private http: HttpClient) {}

  getCards(libelle: string): Observable<CardServiceRes> {
    return this.http.get<CardServiceRes>(`/card/get-by-libelle/${libelle}`);
  }
  getCardInfo(libelle: string): Observable<string> {
    return this.http.get<string>(`/card/get-by-libelle/${libelle}`);
  }

  createCard(
    Createlibelle: string,
    url: string,
    note: string
  ): Observable<any> {
    console.log(
      `/card/create?libelle=${Createlibelle}&url=${url}&note=${note}`
    );
    return this.http.post(
      `/card/create?libelle=${Createlibelle}&url=${url}&note=${note}`,
      Card
    );
  }
  deleteCard(deleteCardId: string): Observable<string> {
    return this.http.delete<string>(`card/delete?id=${deleteCardId}`);
  }
}
