import { Injectable } from '@nestjs/common';
import { ALL_POSTS } from 'src/mock-data/posts';
import { Post } from 'src/models/post.model';

@Injectable()
export class PostsService {
    getAllPosts(): Post[] {
        return ALL_POSTS;
    }

    getPostById(id: number): Post {
        let post: Post;
        // add code below. Hint: you must find the post by id, inside the ALL_POSTS array
    
        //
        return post;
    }
}
