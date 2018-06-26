import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import { Movie} from '../movie.model';
import { MoviesService} from '../movies.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private moviesSub: Subscription;
  constructor(public moviesService: MoviesService, private _router: Router) {}
  ngOnInit() {
    this.moviesService.getMovies();
    this.moviesSub = this.moviesService.getMovieUpdateListener().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }
}
