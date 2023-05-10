import { Controller, Get, Param } from '@nestjs/common';
import { PostComment } from 'src/models/post-comment.model';
import { PostCommentsService } from './post-comments.service';


@Controller('comments')
export class CommentsController {
    constructor(private readonly postCommentsService: PostCommentsService) { }

    @Get()
    getAllComments(): PostComment[] {
        return this.postCommentsService.getAllComments();
    }

    @Get(':id')
    getCommentById(@Param() params): PostComment {
        return this.postCommentsService.getCommentById(+params.id);
    }
    // getCommentById(@Param('id', ParseIntPipe) id: number): PostComment {
    //     return this.postCommentsService.getCommentById(params.id);
    // }
    @Get('getcommentsforpostid/:postId')
    getCommentsForPostId(@Param('postId') postId: number): PostComment[] {
        return this.postCommentsService.getCommentsForPostId(+postId);
    }
    // getCommentsForPostId(@Param('postId', ParseIntPipe) postId: number): PostComment[] {
    //     return this.postCommentsService.getCommentsForPostId(postId);
    // }
}
