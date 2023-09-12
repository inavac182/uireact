import { format } from 'util';

import '@testing-library/jest-dom';

import 'jest-styled-components';

// eslint-disable-next-line no-undef
console.error = function (...args) {
  throw new Error(format(...args));
};

// eslint-disable-next-line no-undef
console.warn = function (...args) {
  throw new Error(format(...args));
};
