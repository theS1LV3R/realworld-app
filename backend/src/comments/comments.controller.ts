import { Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import ArticlesService from '@/articles/articles.service';
import DeleteCommentParams from './dto/delete-comment-params.dto';
import ArticleParams from '@/articles/dto/article-params.dto';

@Controller('comments')
export default class CommentsController {
  @Inject(ArticlesService)
  private readonly articlesService: ArticlesService;

  @ApiTags('Comments')
  @Get(':slug/comments')
  getComments(@Param() params: ArticleParams) {}

  @ApiTags('Comments')
  @Post(':slug/comments')
  createComment(@Param() params: ArticleParams) {}

  @ApiTags('Comments')
  @Delete(':slug/comments/:id')
  deleteComment(@Param() params: DeleteCommentParams) {}
}
