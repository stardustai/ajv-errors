module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '.archive/', 'lib/'],
  testMatch: ['**/__tests__/**/*.+(spec|test).ts?(x)'],
};
