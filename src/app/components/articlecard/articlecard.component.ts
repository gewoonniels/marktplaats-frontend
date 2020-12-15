import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Artikel } from 'src/app/models/artikel';
import { ArtikelService } from 'src/app/service/artikel.service';
import { ShoppingcartService } from 'src/app/service/shoppingcart.service';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.css']
})
export class ArticlecardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() artikel: Artikel

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: this.artikel
    });
  }

  addToShoppingCart(){
    console.log("zit in shopping cart");
  }

}

@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.html',
})
export class Dialog {

  constructor(public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public artikel: Artikel, private shoppingCart: ShoppingcartService, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToShoppingCart(){
    this.shoppingCart.addArticleToShoppingCart(this.artikel);
    this.router.navigate([""]);
    this.dialogRef.close();
  }

}
