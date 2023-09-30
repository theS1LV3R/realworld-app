import { Controller, Delete, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import ArticlesService from '@/articles/articles.service';
import ArticleParams from '@/articles/dto/article-params.dto';

@ApiTags('Favorites')
@Controller('favorites')
export default class FavoritesController {
  @Inject(ArticlesService)
  private readonly articlesService: ArticlesService;

  @Post(':slug/favorite')
  addToFavorites(@Param() params: ArticleParams) {}

  @Delete(':slug/favorite')
  removeFromFavorites(@Param() params: ArticleParams) {}
}
