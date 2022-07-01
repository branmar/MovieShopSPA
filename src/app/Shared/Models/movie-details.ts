import { Genre } from "./genre";
import { Cast } from "./cast";
import { Trailer } from "./trailer";
export interface MovieDetails {
    Genres:Genre[];
    Casts:Cast[];
    Trailers:Trailer[];

    id:number;
    title:string;
    posterUrl:string;
    backdropUrl:string;
    rating:number;
    overview:string;
    tagline:string;
    budget:number;
    revenue:number;
    imdbUrl:string;
    tmdbUrl:string;
    releaseDate:Date;
    runtime:number;
    price:number;
}
