import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");  //this is commented out to prevent error messages in the console
  }

  constructor(private movieService: MovieService) { }

  addNewMovie(movietitle:HTMLInputElement, moviedirector:HTMLInputElement, movieyear:HTMLInputElement):boolean{
    this.movieService.addMovie(movietitle.value, moviedirector.value, movieyear.value);
    movietitle.value=''; moviedirector.value=''; movieyear.value='';
    return false;
  }
}
