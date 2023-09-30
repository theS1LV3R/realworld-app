import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ArticlesService from './articles.service';
import ArticleParams from './dto/article-params.dto';
import CreateArticleRequestDto from './dto/create-article-request.dto';
import GetArticlesQueryDto from './dto/get-articles-query.dto';

@ApiTags('Articles')
@Controller('articles')
export default class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getArticles(@Query() queryParams: GetArticlesQueryDto) {}

  @Post()
  createArticle(@Body() article: CreateArticleRequestDto) {}

  @Get('feed')
  getFeed() {}

  @Get(':slug')
  getArticle(@Param() params: ArticleParams) {}

  @Put(':slug')
  updateArticle(@Param() params: ArticleParams) {}

  @Delete(':slug')
  deleteArticle(@Param() params: ArticleParams) {}
}
