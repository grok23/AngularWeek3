import { Component } from '@angular/core';
import { Movie } from './movie.model';
//import { MovieService} from  './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mySelectedMovie: Movie;
  setSelectedMovie(movie:Movie) {
    this.mySelectedMovie = movie;
  }


 // movies=[];

  //constructor(private movieService: MovieService) {}

  //ngOnInit() {
   //this.movies = this.movieService.getMovies();
   //console.log(this.movies);
 // }
}


