import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie-details/movie.component';
import { GenreComponent } from './genre/genre.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
