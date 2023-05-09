import { Controller, Get, Param } from '@nestjs/common';
import { Post } from 'src/models/post.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Post[] {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param() params): Post {
      return this.postsService.getPostById(+params.id);
  }
}

