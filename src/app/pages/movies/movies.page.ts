import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from 'src/app/model/IMovies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<IMovies>;
  term: string = '';
  type: string = '';

  constructor(private movieSv: MovieService) { }

  ngOnInit() {
  }

  onSearchChange(){
    this.results = this.movieSv.searchMovie(this.term, this.type);
    console.log(this.results);
  }

}