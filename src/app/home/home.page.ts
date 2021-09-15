import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Film, ListFilm } from '../services/models/Films.model';
import { TempDataService } from '../services/temp-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaFilms: ListFilm;
  public results: any;

  /* listaFilms: Films[] = [
      eslint-disable @typescript-eslint/naming-convention
     {
       title: 'Guerra em marte',
       episode_id: 1,
       director: 'Enzo Fonseca',
       release_date: '10/07/2017',
     },
     {
       title: 'Guerra na estrelas',
       episode_id: 2,
       director: 'Enzo Fonseca',
       release_date: '12/02/2020',
     }
   ]; */

  constructor(
    private apiService: ApiService,
    public route: Router,
    public dataService: TempDataService
  ) {
    this.listFilms();
  }

  filmPage(film: Film) {
    this.dataService.dataSave('film', film);
    this.route.navigateByUrl('film-page');
  }


  listFilms() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
      this.listaFilms = data;
      length = this.listaFilms.results.length;
      this.results = this.listaFilms.results;
      console.log(length);
    });
  }


}
