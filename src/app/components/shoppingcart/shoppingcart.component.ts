import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Artikel } from 'src/app/models/artikel';
import { Winkelmand } from 'src/app/models/winkelmand';
import { ShoppingcartService } from 'src/app/service/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private shoppingcartService: ShoppingcartService, private router: Router) { }

  winkelmand: Winkelmand

  ngOnInit(): void {
    this.shoppingcartService.getAll().subscribe(winkelmand => {
      this.winkelmand = winkelmand;
      });
  }

  getPrijs(): number{
    let prijs: number = 0;
    this.winkelmand.artikelen.forEach(artikel => {
      prijs += artikel.prijs;
    })
    return prijs
  }

  deleteArticle(artikel: Artikel){
    this.shoppingcartService.deleteArticleFromShoppinCart(artikel);
  }

  buy(){
    this.router.navigate(["/pay"])
  }
}
