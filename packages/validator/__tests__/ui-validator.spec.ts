import { UiValidator } from '../src';

describe('UiValidator', () => {
  it('Should return an object', () => {
    const validator = new UiValidator();
    expect(validator).toBe({});
  });
});
