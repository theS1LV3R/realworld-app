import { resolve } from 'node:path';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import {
  ConfigModule,
  ConfigModuleOptions,
  ConfigService,
} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import CommentsModule from '@/comments/comments.module';
import FavoritesModule from '@/favorites/favorites.module';
import UsersModule from '@/users/users.module';
import ProfilesModule from '@/profiles/profiles.module';
import ArticlesModule from '@/articles/articles.module';
import TagsModule from '@/tags/tags.module';
import { configFactory } from '@/config';
import TypeOrmConfigService from '@/common/typeorm-config.service';
import GlobalModule from './common/global.module';
import AuthorizationGuard from './common/authorization.guard';

const configConfig: ConfigModuleOptions = {
  isGlobal: true,
  load: [configFactory],
  cache: true,
  expandVariables: true,
  envFilePath:
    process.env.NODE_ENV === 'production'
      ? resolve(__dirname, '../.env')
      : resolve(__dirname, '../.env.dev'),
  ignoreEnvFile: false,
  ignoreEnvVars: false,
};

@Module({
  imports: [
    ConfigModule.forRoot(configConfig),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    GlobalModule,
    UsersModule,
    ProfilesModule,
    ArticlesModule,
    TagsModule,
    CommentsModule,
    FavoritesModule,
  ],
  exports: [ConfigModule],
  providers: [
    { provide: APP_GUARD, useClass: AuthorizationGuard },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
  ],
})
export default class AppModule {}
