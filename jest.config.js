// eslint-disable-next-line no-undef
module.exports = {
  verbose: true,
  modulePaths: ["node_modules"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['node_modules'],
  moduleDirectories: ["node_modules", "src"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.{ts,tsx}",
    "!src/**/index.ts",
    "!src/**/*.d.ts",
    "!src/**/svgs/*"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  coverageReporters: ['cobertura', 'html', 'text', 'text-summary'],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/__tests__/",
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/docs/",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>__mocks__/styleMock.js"
  },
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: './jest.tsconfig.json'
    }
  },
  setupFilesAfterEnv: ['./jest-startup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testURL: 'http://localhost',
  testMatch: ['<rootDir>/**/*.spec.ts?(x)']
}
