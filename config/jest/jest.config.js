const path = require('path');

module.exports = {
  notify: true,
  verbose: true,
  rootDir: '../../',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '<rootDir>/test/**/*.spec.js',
    '<rootDir>/**/*.spec.ts',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  coverageReporters: ['json', 'html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
