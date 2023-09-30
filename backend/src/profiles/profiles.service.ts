import { Injectable } from '@nestjs/common';

@Injectable()
export default class ProfilesService {
  async get(username: string) {
    return;
  }

  async follow(username: string) {
    return;
  }

  async unfollow(username: string) {
    return;
  }
}
