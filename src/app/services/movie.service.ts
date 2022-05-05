import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovies } from '../model/IMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string='';
  private apiKey: string='63705367';

  constructor(private http: HttpClient) { }

  searchMovie(tittle: string, type: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(tittle)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IMovies>(this.url).pipe(map(results => results['Search']));
  }

  getMovieDetails(id: string){
    return this.http.get<IMovies>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
