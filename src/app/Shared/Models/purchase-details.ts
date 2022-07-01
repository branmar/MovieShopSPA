import { MovieDetails } from "./movie-details";

export interface PurchaseDetails {
    id:number;
    userId:number;
    purchaseNumber:number;
    totalPrice:number;
    purchaseDateTime:Date;
    movieId:number;

    movieDetails:MovieDetails;
}
