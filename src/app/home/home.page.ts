import { Component} from '@angular/core';
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

//Variavel que recebe os dados da requisição http.
  public listaFilms: ListFilm;


//Variavel que recebe os resultados da variavel listaFilms.
  public results: any;


//Variavel para pegar o tamanho do dados.
  public length: any;

//Array de fotos de capa do filme.
  public listImgs: Array<any> = [
  {id: 4 ,url: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg',},
  {id: 5, url: 'https://images-na.ssl-images-amazon.com/images/I/91zz3a+YJ-L.jpg',},
  {id: 6, url: 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg',},
{id: 1,url: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
},
  {id: 2, url: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',},
  {id: 3,url: 'https://i.pinimg.com/474x/e5/57/6a/e5576a1966329ef7e28554b8cea80841.jpg',}
   ];




   constructor(
    private apiService: ApiService,
    public route: Router,
    public dataService: TempDataService,
  ) {
    this.listFilms();
  }

//Função para pegar o filme da página home e passar para página do filme.
  filmPage(film: Film) {
    this.dataService.dataSave('film', film);
    this.route.navigateByUrl('film-page');
  }

//Função para percorrer o array listImgs e encontrar o respectivo id do filme.
  imgsUrls(id: number) {
    const img = this.listImgs.find(imgs => imgs.id === id);
    return img;
  }

//Função para listar os filmes.
  listFilms() {
    this.apiService.readData().subscribe(data => {
      this.listaFilms = data;
      length = this.listaFilms.results.length;
      this.results = this.listaFilms.results;
    });
  }
  /*  ngOnInit() {
      this.nativeAuido.preloadComplex('music', '../../musicTheme/music.mp3', 0.2, 1, 0);
      console.log(this.nativeAuido);
    } */


}
