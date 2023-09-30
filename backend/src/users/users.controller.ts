import { Controller, Get, Post, Body, Put, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';

import UsersService from './users.service';
import LoginUserRequestDto from './dto/login-user-request.dto';
import CreateUserRequestDto from './dto/new-user-request.dto';
import LoginUserResponseDto from './dto/login-user-response.dto';
import GetUserResponseDto from './dto/get-user-response.dto';
import NeedsAuth from '@/common/needs-auth.decorator';

@ApiTags('User and Authentication')
@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  @ApiBody({
    description: 'Credentials to use',
    type: () => LoginUserRequestDto,
  })
  @ApiOperation({
    summary: 'Existing user login',
    description: 'Login for existing user',
  })
  @ApiOkResponse({
    description: 'User was successfully logged in',
    type: () => LoginUserResponseDto,
  })
  async login(
    @Body() loginRequest: LoginUserRequestDto,
  ): Promise<LoginUserResponseDto> {
    return this.usersService.login(loginRequest.user) as any;
  }

  @Post()
  @ApiOperation({
    summary: 'Regiser a new user',
    description: 'Register a new user',
  })
  @ApiBody({
    description: 'Details of new user to register',
    type: () => CreateUserRequestDto,
  })
  create(@Body() createRequest: CreateUserRequestDto) {
    return this.usersService.create(createRequest);
  }

  @Get()
  @NeedsAuth()
  @ApiBearerAuth('authorization')
  @ApiOperation({
    summary: 'Get current user',
    description: 'Gets the currently logged in user',
  })
  @ApiOkResponse({
    description: 'OK',
    type: () => GetUserResponseDto,
  })
  async getCurrentUser(@Req() request: Request): Promise<GetUserResponseDto> {
    return { user: await this.usersService.getCurrentUser(request) };
  }

  @Put()
  @ApiOperation({
    summary: 'Update current user',
    description: 'Updated user information for current user',
  })
  updateCurrentUser() {}
}
