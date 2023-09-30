import { ConfigFactory } from '@nestjs/config';

const config = () => ({
  port: parseInt(process.env.PORT ?? '3001'),
  database: {
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432'),
    name: process.env.DB_NAME ?? 'realworld',
  },
  swagger: {
    path: process.env.SWAGGER_PATH ?? '/api/docs',
  },
  jwtSecret: process.env.JWT_SECRET ?? 'Such A Safe JWT Secret Change Me Plz',
});

export type configType = ReturnType<typeof config>;
export const configFactory: ConfigFactory<configType> = config;
