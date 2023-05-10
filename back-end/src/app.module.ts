import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostCommentsService } from './comments/post-comments.service';
import { CommentsController } from './comments/comments.controller';

@Module({
  imports: [],
  controllers: [AppController, PostsController, CommentsController],
  providers: [AppService, PostsService, PostCommentsService],
})
export class AppModule {}
