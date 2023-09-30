import Article from '../entities/article.entity';

export default class ArticleDto extends Article {
  favorited: boolean;
}
