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
  getCardInfo(libelle: string): Observable<ICard> {
    return this.http.get<ICard>(`/card/get-by-libelle/${libelle}`);
  }

  createCard(
    Createlibelle: string,
    url: string,
    note: string
  ): Observable<CardServiceRes> {
    console.log(
      `/card/create?libelle=${Createlibelle}&url=${url}&note=${note}`
    );
    return this.http.post<CardServiceRes>(
      `/card/create?libelle=${Createlibelle}&url=${url}&note=${note}`,
      Card
    );
  }
  deleteCard(id: number): Observable<{}> {
    const url = `/card/delete?id=${id}`; // DELETE api/heroes/42
    console.log(id);
    return this.http.delete(url);
  }
}
