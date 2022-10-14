/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^api/(.*)$': '<rootDir>/api/$1', 
    '^io/(.*)$': '<rootDir>/io/$1',
  },
  modulePathIgnorePatterns: ['dist'],
  moduleDirectories:["node_modules", "<rootDir>"],
  roots: ["<rootDir>"]
};