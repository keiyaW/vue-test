module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/store/*.js',
    'src/components/*.vue',
    'src/views/*.vue'
  ],
  coverageDirectory: "tests/coverage",
  coverageReporters: [
    'lcov',
    'text'
  ],
  testMatch: [
    '<rootDir>/tests/unit/**/*.spec.(js)'
  ]
 }
 