import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Movie} from './movie.model';
import {Subject} from 'rxjs';
import {MovieDetail} from './movieDetail.model';

@Injectable({providedIn: 'root'})
export class MoviesService {
  private movies: Movie[] = [];
  private movieDetail: any;
  private moviesUpdated = new Subject<Movie[]>();
  private movieDetailUpdated = new Subject<MovieDetail[]>();
  constructor(private http: HttpClient) {}
  getMovies() {
    this.http.get<{message: string, movies: Movie[] }>('http://localhost:3000/movies')
      .subscribe((movieData) => {
        this.movies = movieData.movies;
        console.log(movieData)
        this.moviesUpdated.next([...this.movies]);
      });
  }
  getMovieDetails(movieName) {
    this.http.get('http://localhost:3000/movies/' + movieName)
      .subscribe((movieDetail) => {
        console.log(movieDetail);
        this.movieDetail = movieDetail;
        this.movieDetailUpdated.next(this.movieDetail);
      });
  }
  getMovieUpdateListener() {
    return this.moviesUpdated.asObservable();
  }

  getMovieDetailUpdateListener() {
    return this.movieDetailUpdated.asObservable();
  }
}
