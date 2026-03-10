import configs from '../../jest.config';

export default {
  ...configs,
  moduleNameMapper: {
    ...configs.moduleNameMapper,
    '^private/(.*)$': '<rootDir>/src/private/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils$': '<rootDir>/src/utils',
    '^types$': '<rootDir>/src/types',
  },
};
