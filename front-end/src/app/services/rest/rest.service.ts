import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/models/post-comment.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  getAllComments(): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${environment.apiUrl}/comments`);
  }

  getCommentById(id: number): Observable<PostComment> {
    return this.http.get<PostComment>(`${environment.apiUrl}/comments/${id}`);
  }

  getCommentsForPostId(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${environment.apiUrl}/comments/getcommentsforpostid/${postId}`);
  }
}
