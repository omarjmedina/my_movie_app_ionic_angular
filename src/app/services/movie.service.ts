import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovies } from '../model/IMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string='';
  private apiKey: string='63705367'; //apiKey from www.omdbAPI.com, max free 1000 request per day.

  constructor(private http: HttpClient) { }

  searchMovie(tittle: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(tittle)}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IMovies>(this.url).pipe(map(res => res['Search']));
  }

  getMovieDetails(id: string){
    return this.http.get<IMovies>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
