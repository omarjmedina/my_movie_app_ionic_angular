import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieFavoritesPage } from './movie-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: MovieFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieFavoritesPageRoutingModule {}
