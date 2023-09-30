import { IsNotEmpty, IsString } from 'class-validator';

export default class ArticleParams {
  @IsString()
  @IsNotEmpty()
  slug: string;
}
