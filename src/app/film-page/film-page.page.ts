import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Film, Characters } from '../services/models/Films.model';
import { TempDataService } from '../services/temp-data.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.page.html',
  styleUrls: ['./film-page.page.scss'],
})
export class FilmPagePage implements OnInit {
//Variavel que vai receber o filme enviado da página home.
  film: Film;
  imgUrl: string;
  public chars: Characters;
  results = [];



  //Array de link para filmes.
  public listImgs: Array<any> = [

  {id: 4 ,url: 'https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg',},
  {id: 5, url: 'https://images-na.ssl-images-amazon.com/images/I/91zz3a+YJ-L.jpg',},
  {id: 6, url: 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg',},
  {id: 1,url: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'},
  {id: 2, url: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',},
  {id: 3,url: 'https://i.pinimg.com/474x/e5/57/6a/e5576a1966329ef7e28554b8cea80841.jpg',}

];

config: SwiperOptions = {
  slidesPerView: 2,
  direction: 'horizontal',
}






    constructor(
    public dataService: TempDataService,
    public route: Router,
    private apiService: ApiService,
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
    this.film.characters.forEach(char => {
      console.log(char);
    this.apiService.charGetData(char).subscribe(data => {
      this.chars = data;
      console.log(this.chars);
      this.results.push(this.chars)
      console.log(this.results);
    });
    })
  }
  //Função para percorrer o array listImgs e encontrar o respectivo id do filme.
  imgsUrls(id: number) {
    const img = this.listImgs.find(imgs => imgs.id === id);
    return img;
  }

  //Função para abrir o link do filme conforme o ID que recebe do filme.
  public openWebPage(id: number) {
    switch(id) {
  case 1: {
    window.open('https://play.google.com/store/movies/details/Star_Wars_A_Amea%C3%A7a_Fantasma_Legendado?id=RHAceTF-zUc&hl=en_US&gl=US', '_blank');
    break;
  }
    case 2: {
      window.open('https://megaflix.online/assistir/6900-Star-Wars--Episodio-II---Ataque-dos-Clones', '_blank');
      break;
    }
    case 3: {
      window.open('https://megaflix.online/assistir/6901-Star-Wars--Episodio-III---A-Vinganca-dos-Sith', '_blank');
      break;
    }
    case 4: {
      window.open('https://superfilmes.tv/filmes/assistir-online-star-wars-episodio-iv-uma-nova-esperanca/', '_blank');
      break;
    }
    case 5: {
      window.open('https://topflix.vc/filmes/assistir-online-o-imperio-contra-ataca/', '_blank');
      break;
    }
    case 6: {
      window.open('https://topflix.vc/filmes/assistir-online-star-wars-o-retorno-de-jedi/', '_blank');
      break;
    }
    default: {
      window.open('https://www.filmelier.com/br/list/onde-assistir-aos-filmes-de-star-wars', '_blank');
      break;
    }

    }
  }

  public charFunction() {





    /* this.chars = this.film.characters;
  console.log(this.chars);
  this.chars.forEach(this.apiService.charGetData); */
  }
}
