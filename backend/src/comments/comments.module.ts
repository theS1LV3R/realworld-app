import { Module } from '@nestjs/common';

import ArticlesModule from '@/articles/articles.module';
import CommentsController from './comments.controller';

@Module({
  controllers: [CommentsController],
  imports: [ArticlesModule],
})
export default class CommentsModule {}
