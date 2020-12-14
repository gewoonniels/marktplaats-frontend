import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Artikel } from '../models/artikel';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  private url = 'http://localhost:9080/marktplaats_backend_war/resources/artikel';

  artikelUpdated$ = new Subject<Artikel[]>();

  constructor(private http: HttpClient) { }

  getAll(){
    this.http.get<Artikel[]>(this.url) 
    .subscribe(
      contacts => this.artikelUpdated$.next(contacts)
    );

    return this.artikelUpdated$;
   }


}
