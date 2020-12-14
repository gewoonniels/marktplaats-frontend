import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sell-article',
  templateUrl: './sell-article.component.html',
  styleUrls: ['./sell-article.component.css']
})
export class SellArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    // all fields
    naam: new FormControl(),
    categorie: new FormControl(),
    soort: new FormControl(),
    omschrijving: new FormControl(),
    prijs: new FormControl(),
    }); 

    sell(){
      console.log(this.loginForm.value);
    }
}
