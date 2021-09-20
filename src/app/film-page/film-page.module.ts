import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule} from 'swiper/angular';

import { FilmPagePageRoutingModule } from './film-page-routing.module';

import { FilmPagePage } from './film-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmPagePageRoutingModule,
    SwiperModule
  ],
  declarations: [FilmPagePage]
})
export class FilmPagePageModule {}
