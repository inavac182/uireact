import { UiValidator } from '../src';

describe('equals validation', () => {
  const validator = new UiValidator();

  it('Should validate when value is equals to a given value', () => {
    const schema = {
      myField: validator.field('choice').equals('exact-value', 'You must type in the same value'),
    }

    const result = validator.validate(schema, { myField: 'exact-value' });
    expect(result.passed).toBeTruthy();
  });

  it('Should error out when value is NOT equals to the given value', () => {
    const schema = {
      myField: validator.field('choice').equals('exact-value', 'You must type in the same value'),
    }

    const result = validator.validate(schema, { myField: 'other-value' });

    expect(result.passed).toBeFalsy();
    expect(result.errors?.myField[0].message).toBe('You must type in the same value');
  });
});
