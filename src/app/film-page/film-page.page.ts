import { Component, OnInit } from '@angular/core';
import { Film } from '../services/models/Films.model';
import { TempDataService } from '../services/temp-data.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.page.html',
  styleUrls: ['./film-page.page.scss'],
})
export class FilmPagePage implements OnInit {

  film: Film;


  constructor(public dataService: TempDataService) { }


  ngOnInit() {
    this.film = this.dataService.giveData('film');
    console.log('Filme Enviado', this.film);
  }

}
