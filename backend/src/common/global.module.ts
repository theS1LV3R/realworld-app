import { configType } from '@/config';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService<configType>) => ({
        secret: config.get('jwtSecret', { infer: true }),
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  exports: [JwtModule],
})
export default class GlobalModule {}
