import { Component, OnInit } from '@angular/core';
import { Artikel } from 'src/app/models/artikel';
import { ArtikelService } from 'src/app/service/artikel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private artikelService: ArtikelService) { }

  artikelen: Artikel[];

  ngOnInit(): void {
    this.artikelService.getAll().subscribe(foundArtikelen => {
      this.artikelen = foundArtikelen;
      });     
  }

}
