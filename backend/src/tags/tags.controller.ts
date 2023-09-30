import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import TagsResponseDto from './dto/tags-response.dto';
import TagsService from './tags.service';

@ApiTags('Tags')
@Controller('tags')
export default class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @ApiOkResponse({ type: () => TagsResponseDto })
  async get(): Promise<TagsResponseDto> {
    const tags = await this.tagsService.getAll();

    return { tags };
  }
}
