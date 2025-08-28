import { UiValidator } from '../src';

describe('Mutate field types', () => {
  const validator = new UiValidator();

  it('Should verify phone is being passed', () => {
    const schema = {
      method: validator.field('choice').oneOf(['phone', 'email']),
      contact: validator
        .field('phone')
        .when('method', validator.is().equals('phone'))
        .run(validator.is().present())
        .else(validator.is().mutate('email', 'You have to provide a valid email').present())
    }

    let result = validator.validate(schema, { method: 'phone', contact: '1111' });

    expect(result.passed).toBeFalsy();

    result = validator.validate(schema, { method: 'phone', contact: '123-121-2323' });

    expect(result.passed).toBeTruthy();
  });

  it('Should mutate field and verify email is being passed', () => {
    const schema = {
      method: validator.field('choice').oneOf(['phone', 'email']),
      contact: validator
        .field('phone')
        .when('method', validator.is().equals('phone'))
        .run(validator.is().present())
        .else(validator.is().mutate('email', 'You have to provide a valid email').present())
    }

    let result = validator.validate(schema, { method: 'email', contact: 'not-valid-email' });

    expect(result.passed).toBeFalsy();
    expect(result.errors?.contact[0].message).toBe('You have to provide a valid email');

    result = validator.validate(schema, { method: 'email', contact: 'valid-email@mail.com' });

    expect(result.passed).toBeTruthy();
  });

    it('Should mutate field and verify email using the default error message', () => {
    const schema = {
      method: validator.field('choice').oneOf(['phone', 'email']),
      contact: validator
        .field('phone')
        .when('method', validator.is().equals('phone'))
        .run(validator.is().present())
        .else(validator.is().mutate('email').present())
    }

    let result = validator.validate(schema, { method: 'email', contact: 'not-valid-email' });

    expect(result.passed).toBeFalsy();
    expect(result.errors?.contact[0].message).toBe('This is not a valid email');

    result = validator.validate(schema, { method: 'email', contact: 'valid-email@mail.com' });

    expect(result.passed).toBeTruthy();
  });
});
