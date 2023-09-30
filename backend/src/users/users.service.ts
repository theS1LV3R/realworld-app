import { Injectable, NotFoundException } from '@nestjs/common';
import { instanceToInstance } from 'class-transformer';
import { Request } from 'express';

import LoginUserDto from './dto/login-user.dto';
import CreateUserDto from './dto/new-user-request.dto';
import UserEntity from './entities/user.entity';

@Injectable()
export default class UsersService {
  create(userData: CreateUserDto) {
    return;
  }

  login(loginData: LoginUserDto) {
    return;
  }

  async getCurrentUser(req: Request): Promise<UserEntity> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return req.user!;
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await UserEntity.findOne({ where: { id } });

    if (!user)
      throw new NotFoundException({ errors: { message: 'User not found' } });

    return UsersService.serializeUser(user);
  }

  static serializeUser(user: UserEntity): UserEntity {
    return instanceToInstance(user);
  }
}
