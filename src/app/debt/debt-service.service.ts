import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Debt } from '../models/debt';

@Injectable({
  providedIn: 'root'
})
export class DebtServiceService {
  private debtsUrl = 'http://localhost:8080/api/v1/debts';

  constructor(private http: HttpClient) { }

  getDebts(): Observable<Debt[]>{
    return this.http.get<Debt[]>(this.debtsUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data)))
      //catchError(this.handleError)
    );
    
  }

  createDebts(debt: Debt): Observable<Debt> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post<Debt>(this.debtsUrl, debt, { headers })
    .pipe(
      tap(data => console.log('createDebt: ' + JSON.stringify(data)))
    );
  }

  // simulate(Debt[]: debts): Month[] {

  // }
}
