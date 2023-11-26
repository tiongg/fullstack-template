// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  moduleNameMapper: {
    '@backend/(.*)': '<rootDir>/$1',
  },
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  detectOpenHandles: true,
};

module.exports = customJestConfig;
