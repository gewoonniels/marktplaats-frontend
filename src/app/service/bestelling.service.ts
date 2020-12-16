import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bestelling } from '../models/bestelling';

@Injectable({
  providedIn: 'root'
})
export class BestellingService {

  private url = 'http://localhost:9080/marktplaats_backend_war/resources/bestellingen';

  constructor(private http: HttpClient) { }

  addBestelling(bestelling: Bestelling){
    this.http.post<Bestelling>(this.url,bestelling) 
    .subscribe(
    );
  }
}
