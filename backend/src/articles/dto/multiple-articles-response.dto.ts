import ArticleDto from './article.dto';

export default class MultipleArticlesResponseDto {
  articles: ArticleDto[];
  articlesCount: number;
}
