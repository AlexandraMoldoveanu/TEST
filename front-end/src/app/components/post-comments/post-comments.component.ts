import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PostComment } from 'src/app/models/post-comment.model';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  comments!: PostComment[];
  subscription: Subscription = new Subscription();

  constructor(private restService: RestService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getComments();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getComments(): void {
    const postId = this.getPostId();
    let commentsObservable: Observable<PostComment[]>;
    if (!postId) {
      commentsObservable = this.restService.getAllComments();
    } else {
      commentsObservable = this.restService.getCommentsForPostId(postId)
    }

    this.subscription.add(commentsObservable.subscribe(
      comments => this.comments = comments.sort(this.sortAscending)));
  }


  onClickComment(id: number): void {
    this.router.navigate(['comments', id]);
  }

  private getPostId(): number | null {
    return this.activatedRoute.snapshot.paramMap.get('postId') as number | null;
  }

  private sortAscending(a: PostComment, b: PostComment): number {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;

  }
}
