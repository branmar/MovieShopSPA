import { MovieCard } from "./movie-card";

export interface Cast {
    id:number;
    name:string;
    profilePath:string;
    character:string;
    
    Movies:MovieCard;
}
