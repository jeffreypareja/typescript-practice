/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  globals: {
    "ts-jest":{
      tsconfig: "tsconfig.json"
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^api/(.*)$': '<rootDir>/api/$1'
  },
  modulePathIgnorePatterns: ['dist'],
  moduleDirectories:["node_modules", "<rootDir>"],
  roots: ["<rootDir>"]
};