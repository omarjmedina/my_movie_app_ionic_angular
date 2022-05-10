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
      imgUrl: 'https://activicities.com/wp-content/uploads/2022/02/THE-BATMAN-2022-Robert-Pattinson.jpg'
    },
    {
      id: 'tt1211837',
      title: 'Doctor Strange',
      year: '2016',
      imgUrl: 'https://www.aceprensa.com/wp-content/uploads/2016/10/284052-0.jpg'
    },
    {
      id: 'tt1300854',
      title: 'Iron Man 3',
      year: '2013',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkm80tySuNs0JmTZ5ugeOQ25ypS25lGKBPpw&usqp=CAU'
    },
    {
      id: 'tt0800080',
      title: 'The Incredible Hulk',
      year: '2008',
      imgUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2008%2F10%2Fhulk_102308_300.jpg&q=60'
    },
    {
      id: 'tt0348150',
      title: 'Superman Returns',
      year: '2006',
      imgUrl: 'https://www.cinemascomics.com/wp-content/uploads/2020/11/superman-returns-2006-Brandon-Routh.jpg'
    },
    {
      id: 'tt3501632',
      title: 'Thor: Ragnarok',
      year: '2017',
      imgUrl: 'https://www.aceprensa.com/wp-content/uploads/2017/10/284053-0.jpg'
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

