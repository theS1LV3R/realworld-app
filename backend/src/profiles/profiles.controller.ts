import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import ProfilesService from './profiles.service';

@ApiTags('Profile')
@Controller('profiles')
export default class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get(':username')
  getUsername(@Param('username') username: string) {
    return this.profilesService.get(username);
  }

  @Post(':username/follow')
  postUsernameFollow(@Param('username') username: string) {
    return this.profilesService.follow(username);
  }

  @Delete(':username/follow')
  deleteUsernameFollow(@Param('username') username: string) {
    return this.profilesService.unfollow(username);
  }
}
