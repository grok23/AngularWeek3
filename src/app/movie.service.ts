import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie:Movie;

  constructor() { }

  moviesList = [
    new Movie('The GodFather', '1972', 'Francis Ford Coppola'),
    new Movie('Millers Crossing', '1990','The Coen Brothers'),
    new Movie('Dial M for Murder', '1954', 'Alfred Hitchcock'),
    new Movie('Whiplash', '2014', 'Damien Chazelle'),
    new Movie('The Shape of Water', '2017', 'Guillermo del Toro'),
    new Movie('Parasite', '2019', 'Bong Joon-Ho'),
    new Movie('Jojo Rabbit', '2019', 'Taika Waititi')
  ];

  getMovies() {
    return this.moviesList.sort();  //sort has now been added to getMovies
  }
  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push(new Movie(movietitle, movieyear, moviedirector));
  }
}
