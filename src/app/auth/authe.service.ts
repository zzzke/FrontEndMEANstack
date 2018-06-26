import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


import {HttpClient} from '@angular/common/http';
import {Movie} from '../movies/movie.model';
import {SocialUser} from 'angular-6-social-login-v2';

@Injectable({providedIn: 'root'})


export class AutheService {
  private user = new Subject<SocialUser>();
  currentUser = this.user.asObservable();

  constructor() { }

}
