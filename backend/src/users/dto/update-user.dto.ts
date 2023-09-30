import { PartialType } from '@nestjs/mapped-types';
import CreateUserDto from './new-user-request.dto';

export default class UpdateUserDto extends PartialType(CreateUserDto) {
  bio?: string;
  image?: string;
}
