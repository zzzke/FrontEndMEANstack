import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import { Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: '1 Post', content: 'This 1 post'},
  //   {title: '2 Post', content: 'This 2 post'},
  //   {title: '3 Post', content: 'This 3 post'},
  //   {title: '4 Post', content: 'This 4 post'},
  // ];
posts: Post[] = [];
private postsSub: Subscription;
 constructor(public postsService: PostsService) {}
 ngOnInit() {
   this.postsService.getPosts();
   this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
     this.posts = posts;
   });
 }

 onDelete(postId: string) {
  this.postsService.deletePost(postId);
 }
 ngOnDestroy() {
   this.postsSub.unsubscribe();
 }
}
