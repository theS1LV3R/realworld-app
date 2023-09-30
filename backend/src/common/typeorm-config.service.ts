import { resolve } from 'node:path';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { type configType } from '@/config';

@Injectable()
export default class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService<configType, true>) {}

  private logger = new Logger(TypeOrmConfigService.name);

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const conf = this.config.get('database', { infer: true });

    const config: TypeOrmModuleOptions = {
      type: 'postgres',
      host: conf.host,
      port: conf.port,
      username: conf.username,
      password: conf.password,
      database: conf.name,
      entities: [resolve(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: process.env.NODE_ENV !== 'production',
    };

    this.logger.verbose('Creating postgres config options');
    this.logger.debug(config);

    return config;
  }
}
