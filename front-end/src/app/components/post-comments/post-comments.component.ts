import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
              private router: Router) { }

  ngOnInit(): void {
    this.getComments();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getComments(): void {
    this.subscription.add(
      this.restService.getAllComments()
      .subscribe(comments => this.comments = comments.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }))
    );
  }
}
//this.comments = comments.sort((a,b) =>  a.name.localeCompare(b.name)))