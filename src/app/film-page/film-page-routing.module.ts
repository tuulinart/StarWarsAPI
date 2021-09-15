import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmPagePage } from './film-page.page';

const routes: Routes = [
  {
    path: '',
    component: FilmPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmPagePageRoutingModule {}
