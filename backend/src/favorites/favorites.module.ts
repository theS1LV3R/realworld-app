import { Module } from '@nestjs/common';
import ArticlesModule from '@/articles/articles.module';
import FavoritesController from './favorites.controller';

@Module({
  controllers: [FavoritesController],
  imports: [ArticlesModule],
})
export default class FavoritesModule {}
