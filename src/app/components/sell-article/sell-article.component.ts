import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtikelService } from 'src/app/service/artikel.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sell-article',
  templateUrl: './sell-article.component.html',
  styleUrls: ['./sell-article.component.less']
})
export class SellArticleComponent implements OnInit {

  constructor(private artikelService: ArtikelService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    // all fields
    naam: new FormControl('', [Validators.required]),
    categorie: new FormControl('', [Validators.required]),
    soort: new FormControl('', [Validators.required]),
    omschrijving: new FormControl('', [Validators.required]),
    prijs: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ])
  });

    sell(){
      let artikel = {
        naam: this.loginForm.get('naam').value,
        categorie: this.loginForm.get('categorie').value,
        soort: this.loginForm.get('soort').value,
        omschrijving: this.loginForm.get('omschrijving').value,
        prijs: parseInt(this.loginForm.get('prijs').value)
      };
      this.artikelService.addArtikel(artikel);
      this.router.navigate([""]);
    }
}
