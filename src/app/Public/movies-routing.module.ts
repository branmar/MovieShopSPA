import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie-details/movie.component';
import { GenreComponent } from './genre/genre.component';

const routes: Routes = [
  {path: "", component: MovieComponent},
  {path: "Details/:id", component: MovieDetailsComponent},
  {path: "Cast/Details/:id", component: CastDetailsComponent},
  {path: "Genre/:id", component: GenreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
