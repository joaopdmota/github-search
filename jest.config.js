module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  setupFilesAfterEnv: ['./tests/setup.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!<rootDir>/src/App.vue',
    '!<rootDir>/src/main.js',
  ],
  verbose: true,
};
