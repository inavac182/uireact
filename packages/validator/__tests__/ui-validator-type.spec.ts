import { UiValidator } from '../src';

describe('type validation', () => {
  const validator = new UiValidator();

  it('Should use default messaging if none is passed in schema', () => {
    const schema = {
      test: validator.ruler().type('string'),
    };
    const data = {
      test: 123,
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
    expect(result.errors?.test[0].message).toBe('This is not a valid string');
  });

  describe('date', () => {
    it('Should pass if provided value is a date', () => {
      const schema = {
        test: validator.ruler().type('date'),
      };
      const data = {
        test: new Date('2023/12/01'),
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should pass if provided value is a string that can be parse to a date', () => {
      const schema = {
        test: validator.ruler().type('date'),
      };
      const data = {
        test: '2023/12/01',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should fail if provided value is a string but can NOT be parse to a date', () => {
      const schema = {
        test: validator.ruler().type('date'),
      };
      const data = {
        test: 'some string',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test?.[0].message).toBe('This is not a valid date');
    });

    it('Should fail if provided value is invalid', () => {
      const schema = {
        test: validator.ruler().type('date'),
      };
      const data = {
        test: 20,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test?.[0].message).toBe('This is not a valid date');
    });

    it('Should fail if provided value is invalid', () => {
      const schema = {
        test: validator.ruler().type('date', 'The value passed is not correct'),
      };
      const data = {
        test: {},
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test?.[0].message).toBe('The value passed is not correct');
    });
  });

  describe('strings', () => {
    it('Should validate strings when string is provided', () => {
      const schema = {
        test: validator.ruler().type('string'),
      };
      const data = {
        test: 'felipe',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate strings when value provided is a number', () => {
      const schema = {
        test: validator.ruler().type('string'),
      };
      const data = {
        test: 123,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out when value provided is an object', () => {
      const schema = {
        test: validator.ruler().type('string'),
      };
      const data = {
        test: {},
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out when string is undefined and retrieve correct error message', () => {
      const schema = {
        test: validator.ruler().type('string', 'The value is not a string'),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The value is not a string');
    });

    it('Should error out if type is unrecognized', () => {
      const schema = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        test: validator.ruler().type('WHATEVER-VALUE'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });

  describe('numeric', () => {
    it('Should validate numeric values when received a number value', () => {
      const schema = {
        test: validator.ruler().type('numeric'),
      };
      const data = {
        test: 123,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate numeric values when received value has dots', () => {
      const schema = {
        test: validator.ruler().type('numeric'),
      };
      const data = {
        test: "123.23",
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate numeric values when received value has commas', () => {
      const schema = {
        test: validator.ruler().type('numeric'),
      };
      const data = {
        test: "123,23",
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate numeric values when received a number value in string type', () => {
      const schema = {
        test: validator.ruler().type('numeric'),
      };
      const data = {
        test: '123',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should error out if provided value has letters and retrieve correct error message', () => {
      const schema = {
        test: validator.ruler().type('numeric', 'The value is not numeric'),
      };
      const data = {
        test: '123a23',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The value is not numeric');
    });

    it('Should error out if provided value has special characters and retrieve correct error code', () => {
      const schema = {
        test: validator.ruler().type('numeric', 'The value is not numeric'),
      };
      const data = {
        test: '123+23',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The value is not numeric');
    });

    it('Should error out if provided value is undefined', () => {
      const schema = {
        test: validator.ruler().type('numeric'),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if provided value is null', () => {
      const schema = {
        test: validator.ruler().type('numeric'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });

  describe('email', () => {
    it('Should validate email', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate email with double top level domain', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.co.uk',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate email with short top level domain', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.mx',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate email when using _ or - or . in their name', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 't_e.s-t@mail.mx',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate email when using numbers in their name', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 't_e.s-temail99@mail.mx',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate email when using numbers in their domain', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail99.mx',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate email when using - or . in their domain', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@ma-i.l.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should error out if mail name is empty and retrieve correct error message', () => {
      const schema = {
        test: validator.ruler().type('email', 'The email is not valid'),
      };
      const data = {
        test: '@mail.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The email is not valid');
    });

    it('Should error out if mail name has special characters and retrieve correct error code', () => {
      const schema = {
        test: validator.ruler().type('email', 'The email is not valid'),
      };
      const data = {
        test: 'te/st@mail.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The email is not valid');
    });

    it('Should error out if domain name is empty', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'te/st@.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if domain name has special characters', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@ma_il.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if top level domain is empty', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if top level domain has only 1 character', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.x',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if top level domain has more than 4 character', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.longd',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if top level domain has special characters', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: 'test@mail.co_m',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out mail is null', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out mail is undefined', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out mail is not a string', () => {
      const schema = {
        test: validator.ruler().type('email'),
      };
      const data = {
        test: {},
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });

  describe('phone number', () => {
    it('Should validate plain phone values without area code', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1231313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate plain phone values', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1231231313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate plain phone values with country code', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '11231231313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using parenthesis', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1(123)1231313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using parenthesis and spaces', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '(123) 1231313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using country code', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1 (123) 123 1313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using country code and spaces', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1 123 123 1313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using dots', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1.123.123.1313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using hyphens', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '1-123-123-1313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using plus sign for country code', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '+1 123-123-1313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should validate phone values when using plus sign and parenthesis', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '+1 (123) 123-1313',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should error out if phone number is less than 7 characters', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '123456',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if phone number is more than 17 characters', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '+1 (312) 132 1111-',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if phone number has special characters', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '312 132/1111',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if phone number has letters', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: '312 aaa 1111',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if phone number is null and retrieve error message', () => {
      const schema = {
        test: validator.ruler().type('phone', 'The phone is not valid'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The phone is not valid');
    });

    it('Should error out if phone number is undefined and retrieve error code', () => {
      const schema = {
        test: validator.ruler().type('phone', 'The phone is not valid'),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The phone is not valid');
    });

    it('Should error out if phone number is an object', () => {
      const schema = {
        test: validator.ruler().type('phone'),
      };
      const data = {
        test: {},
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });
});
