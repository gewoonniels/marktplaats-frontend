import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Artikel } from '../models/artikel';
import { Winkelmand } from '../models/winkelmand';
import { ArtikelService } from './artikel.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  private uri = `http://localhost:9080/marktplaats_backend_war/resources/winkelmand/`;

  winkelmandUpdated$ = new Subject<Winkelmand>();

  constructor(private http: HttpClient, private artikelService: ArtikelService) { }


  getAll(){
    // const url = `${this.uri}${this.loginService.loggedInUser.ID}`
    const url = `${this.uri}${0}`

    this.http.get<Winkelmand>(url) 
    .subscribe(
      winkelmand => this.winkelmandUpdated$.next(winkelmand)
    );
    return this.winkelmandUpdated$;
   }

  addArticleToShoppingCart(a: Artikel){
    // const url = `${this.uri}${this.loginService.loggedInUser.ID}`
    const url = `${this.uri}${0}`
    this.http.post<Winkelmand>(url, a) 
    .subscribe(() => {
      this.getAll()
      this.artikelService.getAll();
    });
    return this.winkelmandUpdated$;
   }

   deleteArticleFromShoppinCart(a: Artikel){
    // const url = `${this.uri}${this.loginService.loggedInUser.ID}`
    const url = `${this.uri}${0}/${a.id}`
    this.http.delete<Winkelmand>(url) 
    .subscribe(() => this.getAll());
    return this.winkelmandUpdated$;
   }

}
