import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovies, IRelMovies } from '../model/IMovies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url='';
  private apiKey='63705367'; //apiKey from www.omdbAPI.com, max free 1000 request per day.

  private relMovie: IRelMovies[] = [
    {
      id: 'tt1877830',
      title: 'The Batman',
      year: '2022',
      imgUrl: 'https://www.fantasymundo.com/wp-content/uploads/2022/03/batman.jpg'
    },
    {
      id: 'tt1211837',
      title: 'Doctor Strange',
      year: '2016',
      imgUrl: 'https://www.fantasymundo.com/wp-content/uploads/2022/03/batman.jpg'
    },
    {
      id: 'tt1300854',
      title: 'Iron Man 3',
      year: '2016',
      imgUrl: 'https://www.fantasymundo.com/wp-content/uploads/2022/03/batman.jpg'
    },
    {
      id: 'tt0800080',
      title: 'The Incredible Hulk',
      year: '2016',
      imgUrl: 'https://www.fantasymundo.com/wp-content/uploads/2022/03/batman.jpg'
    },
    {
      id: 'tt5095030',
      title: 'Doctor Strange',
      year: '2016',
      imgUrl: 'https://www.fantasymundo.com/wp-content/uploads/2022/03/batman.jpg'
    },
    {
      id: 'tt1211837',
      title: 'Doctor Strange',
      year: '2016',
      imgUrl: 'https://www.fantasymundo.com/wp-content/uploads/2022/03/batman.jpg'
    },
  ];

  constructor(private http: HttpClient) { }

  searchMovie(tittle: string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(tittle)}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IMovies>(this.url).pipe(map(res => res['Search']));
  }

  getMovieDetails(id: string){
    return this.http.get<IMovies>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

  getRelevantMovies(){
    return [...this.relMovie];
  }

  }

