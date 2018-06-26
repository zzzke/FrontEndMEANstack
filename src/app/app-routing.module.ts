import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {LoginComponent} from './auth/login/login.component';
import {MovieListComponent} from './movies/movie-list/movie-list.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'},
  {path: 'create', component: PostCreateComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'movies', component: MovieListComponent},
  {path: 'movies/:name', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
