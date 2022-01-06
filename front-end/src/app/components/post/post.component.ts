import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: Post;
  subscription: Subscription = new Subscription();

  constructor(private restService: RestService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickBack(): void {
    this.navigateToPosts();
  }

  onClickComments(): void {
    this.router.navigate(['posts', this.post.id, 'comments']);
  }

  private getPost(): void {
    const postId = this.getPostId();
    if (!postId) {
      this.navigateToPosts();
    } else {
      this.subscription.add(
        this.restService.getPostById(postId).subscribe(post => this.post = post)
      );
    }
  }

  private getPostId(): number | null {
    return this.activatedRoute.snapshot.paramMap.get('id') as number | null;
  }

  private navigateToPosts(): void {
    this.router.navigate(['posts']);
  }

}
