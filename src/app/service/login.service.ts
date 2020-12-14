import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Gebruiker } from '../models/Gebruiker';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:9080/marktplaats_backend_war/resources/inlog';

  constructor(private http: HttpClient) { }

  login(G: Gebruiker){
    return this.http.post<Gebruiker[]>(this.url, G, {observe: 'response'});
   }

}
