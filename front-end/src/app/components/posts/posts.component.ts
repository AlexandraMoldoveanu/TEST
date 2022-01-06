import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts!: Post[];
  subscription: Subscription = new Subscription();

  constructor(private restService: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickPost(id: number): void {
    this.router.navigate(['posts', id]);
  }

  private getPosts(): void {
    this.subscription.add(
      this.restService.getAllPosts().subscribe(posts => this.posts = posts)
    );
  }

}
