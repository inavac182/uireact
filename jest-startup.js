import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { format } from 'util';

import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
console.error = function (...args) {
  throw new Error(format(...args));
};

// eslint-disable-next-line no-undef
console.warn = function (...args) {
  throw new Error(format(...args));
};
