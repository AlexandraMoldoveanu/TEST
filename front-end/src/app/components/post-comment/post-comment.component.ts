import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostComment } from 'src/app/models/post-comment.model';
import { Subscription } from 'rxjs';
import { RestService } from 'src/app/services/rest/rest.service';


@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  comment!: PostComment;
  subscription: Subscription = new Subscription();

  constructor(private router: Router,
    private restService: RestService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getComment();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickBack(): void {
    this.navigateToPostComments();
  }

  private getComment(): void {
    const commentId = this.getCommentId();

    if (!commentId) {
      this.navigateToPostComments();
    } else {
      this.subscription.add(
        this.restService.getCommentById(commentId).subscribe(comment => this.comment = comment)
      );
    }
  }

  private getCommentId(): number | null {
    return this.activatedRoute.snapshot.paramMap.get('id') as number | null;
  }

  private navigateToPostComments(): void {
    this.router.navigate(['comments']);
  }


}
