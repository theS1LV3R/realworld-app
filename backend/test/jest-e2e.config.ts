import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.e2e-spec.ts$',
  testEnvironment: 'node',
  clearMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/../src/$1',
  },
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        astTransformers: {
          before: ['test/nestjs-swagger-transformer.js'],
        },
      },
    ],
  },
};

export default config;
