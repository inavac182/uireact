import { format } from 'util';

import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
import '@testing-library/react';
import 'jest-styled-components';

import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// eslint-disable-next-line no-undef
console.error = function (...args) {
  throw new Error(format(...args));
};

// eslint-disable-next-line no-undef
console.warn = function (...args) {
  throw new Error(format(...args));
};
