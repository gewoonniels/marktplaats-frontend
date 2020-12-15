import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Gebruiker } from '../models/Gebruiker';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:9080/marktplaats_backend_war/resources/inlog';

  loggedInUser = {} as Gebruiker;

  loginEvent$ = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(g: Gebruiker){
    this.http.post<Gebruiker>(`${this.url}`, g)
      .subscribe(
        data => {
          this.loggedInUser = data;
          this.loginEvent$.next(true);
          console.log(this.loggedInUser);
        },
        error => {
          this.loginEvent$.next(false);
          console.log(error);
        }
      );
   }

  logOut(){
    this.loginEvent$.next(false);
    this.loggedInUser = {} as Gebruiker;
  }

}
