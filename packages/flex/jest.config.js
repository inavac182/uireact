/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const jestConfig = require('../../jest.config');

module.exports = {
    ...jestConfig,
    setupFilesAfterEnv: ['../../jest-startup.js'],
    globals: {
        'ts-jest': {
            diagnostics: true,
            tsconfig: '../../jest.tsconfig.json'
        }
    },
};
