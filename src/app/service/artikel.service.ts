import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Artikel } from '../models/artikel';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  private url = 'http://localhost:9080/marktplaats_backend_war/resources/artikel';

  artikelUpdated$ = new Subject<Artikel[]>();

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAll(){
    this.http.get<Artikel[]>(this.url) 
    .subscribe(
      artikellen => this.artikelUpdated$.next(artikellen)
    );
    return this.artikelUpdated$;
   }

  addArtikel(artikel: Artikel){
    this.http.post<Artikel[]>(`${this.url}/${this.loginService.loggedInUser.ID}`, artikel) 
    .subscribe(() => this.getAll()
);
  }

}
