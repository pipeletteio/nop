const fs = require('fs');

const isCI = typeof process.env.CI === 'string'
  && (process.env.CI === 'true' || process.env.CI === '1');

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  notify: false,
  verbose: true,
  rootDir: '.',
  transform: {
    '^.+\\.ts$': ['@swc/jest', swcConfig]
  },
  testMatch: [
    '<rootDir>/**/*.spec.ts'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/coverage',
    '<rootDir>/build'
  ],
  moduleNameMapper: {
    '^@/src/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageReporters: ['text'].concat(isCI ? ['lcov'] : ['html']),
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
