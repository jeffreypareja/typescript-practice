/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@core/(.*)': './core'
  },
  modulePathIgnorePatterns: ["dist"]
};