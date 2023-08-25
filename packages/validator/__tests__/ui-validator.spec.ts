import { UiValidator } from '../src';

describe('UiValidator', () => {
  const validator = new UiValidator();

  it('Should error out if the schema provided is not valid', () => {
    const schema = {};
    const data = {
      test: 'felipe',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should error out if the schema is null', () => {
    const schema = null;
    const data = {
      test: 'felipe',
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  it('Should error out if no rules are found', () => {
    const schema = {
      diffField: validator.ruler().type('string'),
    };
    const data = {
      test: 'felipe',
    };

    const result = validator.validate(schema, data);

    expect(result.passed).toBeFalsy();
  });

  describe('type validation', () => {
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
        expect(result.errors?.test[0].code).toBeUndefined();
      });

      it('Should error out when string is null and retrieve correct error code', () => {
        const schema = {
          test: validator.ruler().type('string', 'The value is not a string', 'E200'),
        };
        const data = {
          test: null,
        };

        const result = validator.validate(schema, data);

        expect(result.passed).toBeFalsy();
        expect(result.errors?.test[0].message).toBe('The value is not a string');
        expect(result.errors?.test[0].code).toBe('E200');
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
          test: validator.ruler().type('numeric', 'The value is not numeric', 500),
        };
        const data = {
          test: '123+23',
        };

        const result = validator.validate(schema, data);

        expect(result.passed).toBeFalsy();
        expect(result.errors?.test[0].message).toBe('The value is not numeric');
        expect(result.errors?.test[0].code).toBe(500);
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
          test: validator.ruler().type('email', 'The email is not valid', 'E400'),
        };
        const data = {
          test: 'te/st@mail.com',
        };

        const result = validator.validate(schema, data);

        expect(result.passed).toBeFalsy();
        expect(result.errors?.test[0].message).toBe('The email is not valid');
        expect(result.errors?.test[0].code).toBe('E400');
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
          test: validator.ruler().type('phone', 'The phone is not valid', 400),
        };
        const data = {
          test: undefined,
        };

        const result = validator.validate(schema, data);

        expect(result.passed).toBeFalsy();
        expect(result.errors?.test[0].message).toBe('The phone is not valid');
        expect(result.errors?.test[0].code).toBe(400);
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

  describe('range validation', () => {
    it('Should validate correct range', () => {
      const schema = {
        test: validator.ruler().range(10, 100),
      };
      const data = {
        test: 50,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should error out if value is smaller than the min range', () => {
      const schema = {
        test: validator.ruler().range(10, 100),
      };
      const data = {
        test: 3,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if value is bigger than the max range', () => {
      const schema = {
        test: validator.ruler().range(10, 100),
      };
      const data = {
        test: 150,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });

    it('Should error out if value null and retrieve error message', () => {
      const schema = {
        test: validator.ruler().range(10, 100, 'Value is not in range'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('Value is not in range');
    });

    it('Should error out if value undefined and retrieve error code', () => {
      const schema = {
        test: validator.ruler().range(10, 100, 'Value is not in range', 'E120'),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('Value is not in range');
      expect(result.errors?.test[0].code).toBe('E120');
    });

    it('Should error out if value is not a number', () => {
      const schema = {
        test: validator.ruler().range(10, 100),
      };
      const data = {
        test: '120',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });

  describe('length validation', () => {
    it('Should validate correct length', () => {
      const schema = {
        test: validator.ruler().length(0, 10),
      };
      const data = {
        test: 'testString',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should error out when string is too short and retrieve error message', () => {
      const schema = {
        test: validator.ruler().length(5, 10, 'Value is too short'),
      };
      const data = {
        test: 'test',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('Value is too short');
    });

    it('Should error out when string is too long and retrieve error code', () => {
      const schema = {
        test: validator.ruler().length(5, 10, 'Value is too long', 300),
      };
      const data = {
        test: 'This is a very long phrase',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('Value is too long');
      expect(result.errors?.test[0].code).toBe(300);
    });

    it('Should error out if value is not a tring', () => {
      const schema = {
        test: validator.ruler().length(5, 10),
      };
      const data = {
        test: {},
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });

  describe('require validation', () => {
    it('Should validate correct when is required', () => {
      const schema = {
        test: validator.ruler().isRequired(),
      };
      const data = {
        test: 'test',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should error out if value is null and retrieve error message', () => {
      const schema = {
        test: validator.ruler().isRequired('The value is required'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The value is required');
    });

    it('Should error out if value is undefined and retrieve error code', () => {
      const schema = {
        test: validator.ruler().isRequired('The value is required', 'E400'),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test[0].message).toBe('The value is required');
      expect(result.errors?.test[0].code).toBe('E400');
    });

    it('Should still fail if no custom error messaging is passed', () => {
      const schema = {
        test: validator.ruler().isRequired(),
      };
      const data = {
        test: undefined,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
    });
  });

  describe('multiple checks', () => {
    it('Should verify a value is required and valid email', () => {
      const schema = {
        test: validator.ruler().isRequired().type('email'),
      };
      const data = {
        test: 'test@mail.com',
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeTruthy();
    });

    it('Should include all errors if multiple checks fail', () => {
      const schema = {
        test: validator.ruler().isRequired('Value is required').type('email', 'Value is not valid email'),
      };
      const data = {
        test: null,
      };

      const result = validator.validate(schema, data);

      expect(result.passed).toBeFalsy();
      expect(result.errors?.test).toHaveLength(2);
      expect(result.errors?.test[0].message).toBe('Value is required');
      expect(result.errors?.test[1].message).toBe('Value is not valid email');
    });
  });
});
