import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Artikel } from 'src/app/models/artikel';

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
}

@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.html',
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public artikel: Artikel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
