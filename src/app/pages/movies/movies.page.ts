import { MovieService } from './../../services/movie.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from 'src/app/model/IMovies.interface';
import Swiper, {Pagination, SwiperOptions} from 'swiper';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesPage implements OnInit {
  results: Observable<IMovies>;
  title: string = '';
  public swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    
    pagination: true
  };

  constructor(private movieSv: MovieService) { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }

  onSearchChange(){
    this.results = this.movieSv.searchMovie(this.title);
    console.log(this.results);
  }

}
