import { Component, OnInit } from '@angular/core';
import { Film } from '../services/models/Films.model';
import { TempDataService } from '../services/temp-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.page.html',
  styleUrls: ['./film-page.page.scss'],
})
export class FilmPagePage implements OnInit {

//Variavel que vai receber o filme enviado da página home.
  film: Film;
  imgUrl: string;




  //Array de fotos de capa do filme.
  public listImgs: Array<any> = [
  //eslint-disable @typescript-eslint/naming-convention
  {id: 4 ,url: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg',},
  {id: 5, url: 'https://images-na.ssl-images-amazon.com/images/I/91zz3a+YJ-L.jpg',},
  {id: 6, url: 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg',},
{id: 1,url: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'
},
  {id: 2, url: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',},
  {id: 3,url: 'https://i.pinimg.com/474x/e5/57/6a/e5576a1966329ef7e28554b8cea80841.jpg',}
  // eslint-disable-next-line-max-len
     ];


  constructor(
    public dataService: TempDataService,
    public route: Router,
    ) { }

//Função para pegarmos o filme enviado da página home.
//CASO o filme seja indefinido, irá redirecionar para página home e dar um reload para pegar os filmes.
  ngOnInit() {
    this.film = this.dataService.giveData('film');
    if(this.film === undefined) {
    this.route.navigateByUrl('home').then(() => {
      window.location.reload();
    });
    }
  }
  //Função para percorrer o array listImgs e encontrar o respectivo id do filme.
  imgsUrls(id: number) {
    const img = this.listImgs.find(imgs => imgs.id === id);
    return img;
  }

}
