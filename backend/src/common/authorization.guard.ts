import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import UsersService from '@/users/users.service';
import { NEEDS_AUTH_KEY } from './needs-auth.decorator';
import { JwtPayload } from './types/Jwt';
import { TokenExpiredError } from 'jsonwebtoken';
import ErrorEnum from './error.enum';
import { Request } from 'express';

@Injectable()
export default class AuthorizationGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const needsAuth = this.reflector.getAllAndOverride<boolean>(
      NEEDS_AUTH_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!needsAuth) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['Authorization'] as string | undefined;

    if (!authHeader) return false;
    // Header should be in format 'Token xxx.yyy.zzz'
    if (
      !authHeader.match(
        /Token eyJ[A-Za-z0-9-_]+\.eyJ[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/]*/g,
      )
    )
      return false;

    const token = authHeader.split(' ')[1];

    return this.jwtService
      .verifyAsync<JwtPayload>(token)
      .then(async (payload) => {
        if (!payload.sub) return false;

        request.user = await this.validateUser(+payload.sub);
        return true;
      })
      .catch((err) => {
        if (err instanceof TokenExpiredError) {
          throw new UnauthorizedException(ErrorEnum.TOKEN_EXPIRED);
        } else {
          throw err;
        }
      });
  }

  async validateUser(userId: number) {
    const user = await this.usersService.findOne(userId).catch((err) => {
      if (err instanceof NotFoundException) {
        throw new ForbiddenException();
      } else {
        throw err;
      }
    });

    return UsersService.serializeUser(user);
  }
}
