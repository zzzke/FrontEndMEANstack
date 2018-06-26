import {Component, Injectable, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service';
import {MovieDetail} from '../movieDetail.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
@Injectable({providedIn: 'root'})
export class MovieDetailComponent implements OnInit, OnDestroy{
  movieDetail: MovieDetail[] = [];
  private movieDetailSub: Subscription;
  name: string;
  constructor(public moviesService: MoviesService, private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this._activeRoute.snapshot.params['name'];
    this.moviesService.getMovieDetails(this.name);
    this.movieDetailSub = this.moviesService.getMovieDetailUpdateListener()
      .subscribe( movieDetail => {
        this.movieDetail = movieDetail;
      });
  }
  ngOnDestroy() {
    this.movieDetailSub.unsubscribe();
  }
}
