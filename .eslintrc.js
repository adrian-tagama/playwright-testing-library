const {overrides, ...config} = require('@hover/javascript/eslint')

module.exports = {
  ...config,
  ignorePatterns: ['dom-testing-library.js', 'rollup.input.js'],
  parserOptions: {
    project: ['tsconfig.eslint.json'],
  },
}
