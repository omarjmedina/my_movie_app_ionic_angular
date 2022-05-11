import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieFavoritesPageRoutingModule } from './movie-favorites-routing.module';

import { MovieFavoritesPage } from './movie-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieFavoritesPageRoutingModule
  ],
  declarations: [MovieFavoritesPage]
})
export class MovieFavoritesPageModule {}
