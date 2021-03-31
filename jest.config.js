module.exports = {
  modulePaths: ["node_modules"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['node_modules'],
  moduleDirectories: ["node_modules", "packages"],
  collectCoverage: true,
  collectCoverageFrom: [
      "packages/**/src/**/*.{ts,tsx}",
      "packages/**/src/**/index.ts"
  ],
  coverageThreshold: {
      global: {
          branches: 90,
          functions: 90,
          lines: 90,
          statements: 90
      }
  },
  coverageReporters: ['Coverage', 'html', 'text', 'text-summary'],
  coveragePathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/__tests__/",
      "<rootDir>/src/styles/"
  ],
  moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/packages/**/__mocks__/styleMock.js"
  },
  transform: {
      '^.+\\.(j|t)sx?$': 'ts-jest'
  },
  globals: {
      'ts-jest': {
          diagnostics: false,
          tsConfig: 'jest.tsconfig.json'
      }
  },
  setupFilesAfterEnv: ['<rootDir>/jest-startup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testURL: 'http://localhost',
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts?(x)']
}
