import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Film, Characters } from '../services/models/Films.model';
import { TempDataService } from '../services/temp-data.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.page.html',
  styleUrls: ['./film-page.page.scss'],
  encapsulation: ViewEncapsulation.None,
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
    this.apiService.charGetData(char).subscribe(data => {
      this.chars = data;
      this.results.push(this.chars);
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


  //Função para pegar a imagem do personagem certo.
  public ImgChar(name: string) {
    switch(name) {
  case "Luke Skywalker": {
    const img = "https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg";
    return img;
  }
  case "C-3PO": {
    const img = "https://upload.wikimedia.org/wikipedia/pt/6/66/C-3PO.jpg";
    return img;
  }
  case "R2-D2": {
    const img = "https://upload.wikimedia.org/wikipedia/pt/3/39/R2-D2_Droid.png";
    return img;
  }
  case "Darth Vader": {
    const img = "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg";
    return img;
  }
  case "Leia Organa": {
    const img = "https://i0.wp.com/garotasrosachoque.com.br/wp-content/uploads/2018/03/66060DDE-3A20-4348-A52D-A3995072E696.jpeg?resize=1140%2C800&ssl=1";
    return img;
  }
  case "Owen Lars": {
    const img = "https://i.pinimg.com/originals/32/33/53/323353d1d14345f7bba31a4f500d136b.png";
    return img;
  }
  case "Beru Whitesun lars": {
    const img = "https://i.pinimg.com/originals/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg";
    return img;
  }
  case "R5-D4": {
    const img = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F01%2Fthe-mandalorian-2000.jpg&q=85";
    return img;
  }
  case "Biggs Darklighter": {
    const img = "https://comicvine.gamespot.com/a/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg";
    return img;
  }
  case "Obi-Wan Kenobi": {
    const img = "https://img.ibxk.com.br//ms/images/highlights/000/054/335/51019.jpg?w=1200&h=675&mode=crop&scale=both";
    return img;
  }
  case "Wilhuff Tarkin": {
    const img = "https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png";
    return img;
  }
  case "Chewbacca": {
    const img = "https://www.hojeemdia.com.br/polopoly_fs/1.711510!/image/image.jpg_gen/derivatives/landscape_653/image.jpg";
    return img;
  }
  case "Han Solo": {
    const img = "https://upload.wikimedia.org/wikipedia/pt/f/f4/HanSolo.jpg";
    return img;
  }
  case "Greedo": {
    const img = "https://i.pinimg.com/564x/aa/61/f2/aa61f2d626f0bc5b755b5e4209d2271c.jpg";
    return img;
  }
  case "Jabba Desilijic Tiure": {
    const img = "https://pm1.narvii.com/6583/fbafe0ec21093c589e9c1c0fb679edf5d3a69532_hq.jpg";
    return img;
  }
  case "Wedge Antilles": {
    const img = "https://i0.wp.com/sociedadejedi.com.br/wp-content/uploads/2016/12/images-1-1.jpg?fit=512%2C288&ssl=1";
    return img;
  }
  case "Jek Tono Porkins": {
    const img = "https://i.redd.it/kfvbjz2ootu41.jpg";
    return img;
  }
  case "Raymus Antilles": {
    const img = "https://i.pinimg.com/originals/ea/d1/25/ead1250106b60318cf6276934e6b70a7.jpg";
    return img;
  }
  case "Yoda": {
    const img = "https://miro.medium.com/max/768/0*0zjYV4JD8xhfqeUu.jpg";
    return img;
  }
  case "Palpatine": {
    const img = "https://revistabula.com/wp/wp-content/uploads/2020/03/Palpatine.jpg";
    return img;
  }
  case "Boba Fett": {
    const img = "https://sm.ign.com/ign_br/screenshot/default/blob_1kfq.png";
    return img;
  }
  case "IG-88": {
    const img = "https://cdna.artstation.com/p/media_assets/images/images/000/182/446/large/IG_88_Final.jpg?1515589888";
    return img;
  }
  case "Bossk": {
    const img = "https://www.wasd.pt/wp-content/uploads/2016/09/bossk.jpg";
    return img;
  }
  case "Lando Calrissian": {
    const img = "https://sm.ign.com/ign_pt/news/s/star-wars-/star-wars-lando-calrissian-series-in-development-at-disney_zs4d.jpg";
    return img;
  }
  case "Lobot": {
    const img = "https://bookriot.com/wp-content/uploads/2020/11/lobot-empire-strikes-back-film-still-feature-700x375-1-1280x720.jpg";
    return img;
  }
  case "Ackbar": {
    const img = "https://img.cinemablend.com/filter:scale/quill/b/0/3/7/e/1/b037e18dc3dded77c68472437f28e67de4267154.jpg?fw=1200";
    return img;
  }
  case "Mon Mothma": {
    const img = "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/Star-Wars-Yavin-IV-Rebels-Mon-Mothma.jpg";
    return img;
  }
  case "Arvel Crynyd": {
    const img = "http://ayay.co.uk/backgrounds/star_wars/rebel_alliance_characters/arvel-crynyd.jpg";
    return img;
  }
  case "Wicket Systri Warrick": {
    const img = "https://lumiere-a.akamaihd.net/v1/images/a-wicket-bio-1_copy_f3544c59.jpeg?region=150%2C0%2C974%2C548";
    return img;
  }
  case "Nien Nunb": {
    const img = "https://images.immediate.co.uk/production/volatile/sites/3/2020/01/Screen-Shot-2020-01-11-at-12.52.38-f33ecaf.png?quality=90&resize=620,413";
    return img;
  }
  case "Bib Fortuna": {
    const img = "https://upload.wikimedia.org/wikipedia/en/6/65/Bib_Fortuna_%28screenshot%29.jpg";
    return img;
  }
  case "Anakin Skywalker": {
    const img = "https://snworksceo.imgix.net/bsd/e08b54af-db5d-4a31-be34-260e5a6da34a.sized-1000x1000.jpg?w=1000";
    return img;
  }
  case "Qui-Gon Jinn": {
    const img = "https://i1.wp.com/sociedadejedi.com.br/wp-content/uploads/2016/05/Qui-Gon-Jinn_d89416e8.jpeg.jpg?fit=700%2C394&ssl=1";
    return img;
  }
  case "Nute Gunray": {
    const img = "https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg?region=0%2C0%2C1560%2C780";
    return img;
  }
  case "Finis Valorum": {
    const img = "http://pm1.narvii.com/7076/221e549a20da4c552a9412b526873d72bfd56758r1-1407-1377v2_00.jpg";
    return img;
  }
  case "Padmé Amidala": {
    const img = "https://lh3.googleusercontent.com/proxy/Prqnnj6Cl3LcuGi_fjHGzko6Qu9GLudEG5UyYc7V3IvjXbSBXnXbsQ7ozuIeDqYPwMNYFCf3XUIcro61FBK95gXfviO9-rjTwPYDoMhEc8xHyKRWMQljfoL_gtYR8v0suSeWXJMpUf8r";
    return img;
  }
  case "Jar Jar Binks": {
    const img = "https://gaming-fans.com/wp-content/uploads/2017/03/Jar_Jar_Binks.jpg";
    return img;
  }
  case "Roos Tarpals": {
    const img = "https://pbs.twimg.com/profile_images/1336016310862569477/rAOdcDBu_400x400.jpg";
    return img;
  }
  case "Rugor Nass": {
    const img = "https://seenonceleb.com/wp-content/uploads/2019/06/The-mask-of-Rugor-Nass-in-Star-Wars-episode-I-The-Phantom-Menace.jpg";
    return img;
  }
  case "Ric Olié": {
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_2RaNhqLP4m3d_sS5b-8Dy24zXeKT7iH4Q&usqp=CAU";
    return img;
  }
  case "Watto": {
    const img = "https://i.pinimg.com/originals/bb/79/b2/bb79b270f620be21e3ba689de51805d5.jpg";
    return img;
  }
  case "Sebulba": {
    const img = "https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg?region=0%2C0%2C2453%2C1380&width=960";
    return img;
  }
  case "Quarsh Panaka": {
    const img = "https://i.pinimg.com/originals/b3/bf/4b/b3bf4b0d16aa6941a39ebe04bf973f7b.jpg";
    return img;
  }
  case "Shmi Skywalker": {
    const img = "https://www.looper.com/img/uploads/2016/01/themostimportantstarwarscharacternoonetalksabout.jpg";
    return img;
  }
  case "Darth Maul": {
    const img = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/02/Darth-Maul-1024x576.jpg";
    return img;
  }
  case "Ayla Secura": {
    const img = "https://pbs.twimg.com/media/CkOPwnCWUAEc-KY.jpg";
    return img;
  }
  case "Ratts Tyerel": {
    const img = "https://comicvine.gamespot.com/a/uploads/scale_small/5/51078/1173426-ratts_tyerell.jpg";
    return img;
  }
  case "Plo Koon Bolt": {
    const img = "https://i.pinimg.com/736x/63/52/8b/63528bf1a97de6cc3c5e584e27f2c2bd.jpg";
    return img;
  }
  case "Gasgano": {
    const img = "https://starwars.ru/media/universe_entity/gasgano_detail.png";
    return img;
  }
  case "Ben Quadinaros": {
    const img = "https://i.redd.it/ff4j88puj0n01.png";
    return img;
  }
  case "Mace Windu": {
    const img = "https://www.jedicenter.com.br/wp-content/uploads/2020/12/images-1.jpeg";
    return img;
  }
  case "Ki-Adi-Mundi": {
    const img = "https://pbs.twimg.com/profile_images/1263240441148956679/-Ohpkk1F_400x400.jpg";
    return img;
  }
  case "Kit Fisto": {
    const img = "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=0%2C49%2C1560%2C780";
    return img;
  }
  case "Eeth Koth": {
    const img = "https://pm1.narvii.com/6126/5d2eb337b58e91cdc33319a745ef66c127eb4d69_hq.jpg";
    return img;
  }
  case "Adi Gallia": {
    const img = "https://i.pinimg.com/originals/cd/65/f7/cd65f777b63f3a579385944c9e9fbd81.jpg";
    return img;
  }
  case "Saesee Tiin": {
    const img = "http://4.bp.blogspot.com/_Ql-01uFvGJM/TJAe7QjEhoI/AAAAAAAACLI/9wrBZ4tSeGc/s1600/saesee_face2.jpg";
    return img;
  }
  case "Yarael Poof": {
    const img = "https://pbs.twimg.com/media/EM0SW83WsAAgm7R.jpg";
    return img;
  }
  case "Plo Koon": {
    const img = "https://vignette.wikia.nocookie.net/jedipedia/images/6/6e/PloKoonPortr%C3%A4t.jpg/revision/latest/top-crop/width/360/height/360?cb=20100425120213&path-prefix=de";
    return img;
  }
  case "Gregar Typho": {
    const img = "https://i.pinimg.com/originals/56/4c/75/564c757171c56d012ccf277e13fc84e1.jpg";
    return img;
  }
  case "Cordé": {
    const img = "https://64.media.tumblr.com/aedfbe9fae85d61cc8b6daa23d508fa2/69db6c9ffe864465-37/s1280x1920/023547a7df33c4c0527dd10dfdb45e8f7bf97eba.jpg";
    return img;
  }
  case "Cliegg Lars": {
    const img = "https://i.pinimg.com/originals/74/01/f5/7401f5362803efc1e9a802ce7dcec4bb.jpg";
    return img;
  }
  case "Poggle the Lesser": {
    const img = "https://i.pinimg.com/736x/cd/51/20/cd5120a0a89f33bf2c2f54dcb8944c02.jpg";
    return img;
  }
  case "Luminara Unduli": {
    const img = "https://i.pinimg.com/474x/ed/63/0c/ed630cd3e35d911e33abe30fdddedee3--comic-con-costumes-star-wars-costumes.jpg";
    return img;
  }
  case "Barriss Offee": {
    const img = "https://i.pinimg.com/originals/9c/c7/8e/9cc78eb4be813a88ee255ecd7312d478.jpg";
    return img;
  }
  case "Dormé": {
    const img = "https://i.pinimg.com/550x/bb/f6/25/bbf625c91ca1f6b0cc4a11cc491f9bb0.jpg";
    return img;
  }
  case "Dooku": {
    const img = "https://i.redd.it/xoavucpn8q171.jpg";
    return img;
  }
  case "Bail Prestor Organa": {
    const img = "https://i.pinimg.com/originals/fe/94/b0/fe94b038428d25ea3371d45accc97c9b.jpg";
    return img;
  }
  case "Zam Wesell": {
    const img = "https://i.pinimg.com/originals/bb/d7/44/bbd744db73d429e05c60d87643d1b6fe.jpg";
    return img;
  }
  case "Dexter Jettster": {
    const img = "https://i.redd.it/j2wqitzzkmg01.jpg";
    return img;
  }
  case "Lama Su": {
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGkpmlB0xFzxs5ZEmBAlDTo1RxgajHSBlChmbj7kupxhhu1QJE9ork65KcBrnykg8qGU&usqp=CAU";
    return img;
  }
  case "Taun We": {
    const img = "https://i.pinimg.com/originals/fe/b7/29/feb72950856772dfc932d1c458e5677e.jpg";
    return img;
  }
  case "R4-P17": {
    const img = "https://yakfaceforums.com/main/wp-content/uploads/2013/02/A3864-Saga-Legends-EpIII-R4-P17.jpg";
    return img;
  }
  case "Wat Tambor": {
    const img = "https://i.pinimg.com/736x/ff/02/ed/ff02eda1686d23d053773f122827739b.jpg";
    return img;
  }
  case "San Hill": {
    const img = "https://pbs.twimg.com/media/Eg9IQFFWAAAhHnx.jpg";
    return img;
  }
  case "Shaak Ti": {
    const img = "https://i.pinimg.com/474x/84/30/59/843059fee0bab9c3942e15ab7cad5f31.jpg";
    return img;
  }
  case "Grievous": {
    const img = "https://i.pinimg.com/originals/da/57/11/da5711d912851ccfd6b29ec8606bddc4.jpg";
    return img;
  }
  case "Tarfful": {
    const img = "https://i.pinimg.com/originals/93/35/ca/9335ca1b00cfd0ff2fafd2de32f085e4.jpg";
    return img;
  }
  case "Sly Moore": {
    const img = "https://pm1.narvii.com/6087/7a053912d29058cf3b4375517b0020fd6c41dd05_hq.jpg";
    return img;
  }
  case "Tion Medon": {
    const img = "https://i.pinimg.com/originals/00/bb/b6/00bbb6df37706c9b9440865fbd135e90.jpg";
    return img;
  }
  case "Dud Bolt": {
    const img = "https://i.redd.it/g7hfqk7sme851.jpg";
    return img;
  }
  case "Mas Amedda": {
    const img = "https://i.pinimg.com/originals/83/b0/d0/83b0d0ffdeb5ebf916954672f6751da6.jpg";
    return img;
  }
  case "Jango Fett": {
    const img = "https://i.pinimg.com/originals/99/46/03/9946032ee8439fbacabfc07840f04be7.jpg";
    return img;
  }
  case "Jocasta Nu": {
    const img = "https://i.pinimg.com/originals/38/d3/31/38d3312b240f089c54b1b5512f75e953.jpg";
    return img;
  }
  default: {
      const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png';
      return img;
    }

    }
  }


  //OPTIONS IONS-SLIDES
  slideOpts = {
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    on: {
      beforeInit: function() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };

        this.params = Object.assign(this.params, overwriteParams);
        this.originalParams = Object.assign(this.originalParams, overwriteParams);
      },
      setTranslate: function() {
        const swiper = this;
        const {
          $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }
            $cubeShadowEl.css({ height: `${swiperWidth}px` });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }
          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + (round * 4 * swiperSize);
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = (3 * swiperSize) + (swiperSize * 4 * round);
          }
          if (rtl) {
            tx = -tx;
          }

           if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

           const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
          if (progress <= 1 && progress > -1) {
            wrapperRotate = (slideIndex * 90) + (progress * 90);
            if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
          }
          $slideEl.transform(transform$$1);
          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
          '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`,
        });

         if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
            const multiplier = 1.5 - (
              (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
              + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
            );
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset$$1 = params.shadowOffset;
            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
          }
        }

        const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
        $wrapperEl
          .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
      },
      setTransition: function(duration) {
        const swiper = this;
        const { $el, slides } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      },
    }
  }

}
