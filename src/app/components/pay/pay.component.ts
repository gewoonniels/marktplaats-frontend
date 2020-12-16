import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bestelling } from 'src/app/models/bestelling';
import { Winkelmand } from 'src/app/models/winkelmand';
import { BestellingService } from 'src/app/service/bestelling.service';
import { LoginService } from 'src/app/service/login.service';
import { ShoppingcartService } from 'src/app/service/shoppingcart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private shoppingcartService: ShoppingcartService, private bestellingService: BestellingService, private loginService: LoginService) { }

  winkelmand: Winkelmand;

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

  getTotalPrijs(){
      let prijs: number = 0;
      prijs += this.getPrijs();
      if(this.remboursSelected()){
        const remboursPrice = this.winkelmand.artikelen.length * 7.5;
        prijs+= remboursPrice;
      }
      if(this.creditcardSelect()){
        prijs+= 5;
      }
      return prijs;
  }

  payForm = new FormGroup({
    // all fields
    bezorgwijze: new FormControl('', [Validators.required]),
    betaalwijze: new FormControl('', [Validators.required])
  });

  remboursSelected(): boolean {
    return this.payForm.get("bezorgwijze").value === "REMBOURS";
  }

  creditcardSelect(): boolean {
    return this.payForm.get("betaalwijze").value === "CREDITCARD";
  }
  pay(){
    const bestelling: Bestelling = {
      betaalwijze: this.payForm.get("betaalwijze").value,
      bezorgwijze: this.payForm.get("bezorgwijze").value,
      huisnummer: this.loginService.loggedInUser.huisnummer,
      plaats: this.loginService.loggedInUser.woonplaats,
      postcode:this.loginService.loggedInUser.postcode,
      straat: this.loginService.loggedInUser.straat,
      winkelmand: this.winkelmand
    }
    this.bestellingService.addBestelling(bestelling);
  }

}
