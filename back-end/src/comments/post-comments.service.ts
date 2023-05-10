import { Injectable } from '@nestjs/common';
import { ALL_COMMENTS } from 'src/mock-data/post-comments';
import {  PostComment } from 'src/models/post-comment.model';

@Injectable()
export class PostCommentsService {
    getAllComments(): PostComment[] {
        return  ALL_COMMENTS;
    }
    getCommentById(id: number): PostComment {
        let comment: PostComment;
        if(isNaN(id)){
            throw 'Invalid id';
          }
            comment =  ALL_COMMENTS.find( comment => comment.id === id)
           
            if(!comment){
               throw 'Comment not found';
            }
            //
            return comment;
    }
    getCommentsForPostId(postId: number): PostComment[] {
        if(isNaN(postId)){
            throw 'Invalid id';
          }
        return ALL_COMMENTS.filter( comment => comment.postId === postId);
    }
}
