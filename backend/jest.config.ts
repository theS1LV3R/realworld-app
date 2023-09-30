import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  testEnvironment: 'node',
  rootDir: 'src',
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
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
