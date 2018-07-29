module.exports = {
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    '!src/components/**/index.{js,jsx}',
    '!src/components/**/*.story.{js,jsx}',
    '!**/node_modules/**',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  verbose: true,
  testURL: 'http://localhost/',
};
