import { Injectable } from '@nestjs/common';
import Tag from './entities/tag.entity';

@Injectable()
export default class TagsService {
  async getAll() {
    const tags = await Tag.find();

    return tags.map((t) => t.tagName);
  }
}
