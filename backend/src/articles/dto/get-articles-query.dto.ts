import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class GetArticlesQueryDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Filter by tag', required: true })
  tag?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Filter by author (username)', required: false })
  author?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Filter by favorites of a user (username)',
    required: false,
  })
  favorited?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: 'Filter by tag', default: 20, required: false })
  limit?: number = 20;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Limit number of articles returned (default is 20)',
    default: 0,
    required: false,
  })
  offset?: number = 0;
}
