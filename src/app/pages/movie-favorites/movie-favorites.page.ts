import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-favorites',
  templateUrl: './movie-favorites.page.html',
  styleUrls: ['./movie-favorites.page.scss'],
})
export class MovieFavoritesPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
