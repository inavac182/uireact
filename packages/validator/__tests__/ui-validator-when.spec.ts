import { UiValidator } from '../src';

const validator = new UiValidator();

describe('When', () => {
  const consoleError = console.error;
  const mockedFn = jest.fn();

  beforeEach(() => {
    console.error = mockedFn;
  });

  afterEach(() => {
    console.error = consoleError;
    mockedFn.mockClear();
  });

  describe('Run validations', () => {
    it('Should run conditional validation correctly', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('firstName', validator.is().present())
          .run(validator.is().present())
      }
  
      const data = {
        firstName: 'Felipe',
        lastName: 'Nava'
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(true);
    });
  
    it('Should run fallback validation correctly when present', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('firstName', validator.is().present())
          .run(validator.is().present())
          .else(validator.is().present().length(5, 10))
      }
  
      const data = {
        firstName: '',
        lastName: 'SomeValue'
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(true);
    });

    it('Should pass if no fallback provided and preconditions are not met', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('firstName', validator.is().present())
          .run(validator.is().present())
      }
  
      const data = {
        firstName: '',
        lastName: ''
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(true);
    });

    it('Should pass when preconditions are met and validation passes', () => {
      const schema = {
        firstName: validator.field('text').present(),
        phone: validator.field('text').optional(),
        email: validator
          .field('email')
          .when('phone', validator.is().present())
          .run(validator.is().optional())
          .else(validator.is().present("If you don't provide a phone number then provide your email"))
      }

      const data = {
        firstName: 'Felipe',
        phone: '123123123',
        email: ''
      }

      const result = validator.validate(schema, data);
      expect(result.passed).toBe(true);
    })

    it('Should run conditional validation correctly when multiple fields are observed', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator.field('text'),
        email: validator
          .field('email')
          .when('firstName', validator.is().present())
          .and('lastName', validator.is().present())
          .run(validator.is().present())
      }
  
      const data = {
        firstName: 'Felipe',
        lastName: 'Nava',
        email: 'mail@uireact.io'
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(true);
    });

    it('Should NOT run validation if a precondition is not met when multiple fields are observed', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator.field('text'),
        email: validator
          .field('email')
          .when('firstName', validator.is().present())
          .and('lastName', validator.is().present())
          .run(validator.is().present())
      }
  
      const data = {
        firstName: 'Felipe',
        lastName: '',
        email: ''
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(true);
    });

    it('Should run fallback validation if a precondition is not met when multiple fields are observed', () => {
      const schema = {
        firstName: validator.field('text'),
        phone: validator.field('text'),
        email: validator
          .field('email')
          .when('firstName', validator.is().present())
          .and('phone', validator.is().present())
          .run(validator.is().optional())
          .else(validator.is().present("If you don't provide a phone number then provide your email"))
      }
  
      const data = {
        firstName: 'Felipe',
        phone: '',
        email: ''
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(false);
      expect(result.errors?.email?.[0]?.message).toBe("If you don't provide a phone number then provide your email");
    });
  });
  
  describe('Failures', () => {
    it('Should fail if precondition field name is not correct', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('some-name', validator.is().present())
          .run(validator.is().present())
          .else(validator.is().optional())
      }
  
      const data = {
        firstName: 'Felipe',
        lastName: 'Nava'
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(false);
      expect(mockedFn).toHaveBeenCalledTimes(1);
      expect(mockedFn.mock.calls[0][0]).toBe('UiValidator - The lastName has a precondition on some-name, which does NOT exists in the schema, please verify.');
    });

    it('Should fail if precondition is not valid', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('firstName', validator.is())
          .run(validator.is().present())
          .else(validator.is().optional())
      }
  
      const data = {
        firstName: 'Felipe',
        lastName: 'Nava'
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(false);

      expect(mockedFn).toHaveBeenCalledTimes(1);
      expect(mockedFn.mock.calls[0][0]).toBe('UiValidator - lastName has preconditions on firstName which are EMPTY.');
    });

    it('Should fail if No rules are set up for conditional check', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('firstName', validator.is().present())
      }
  
      const data = {
        firstName: 'Felipe',
        lastName: 'Nava'
      }
  
      const result = validator.validate(schema, data);
      expect(result.passed).toBe(false);

      expect(mockedFn).toHaveBeenCalledTimes(1);
      expect(mockedFn.mock.calls[0][0]).toBe('UiValidator - Field lastName does NOT have rules set up.');
    });
  });

  describe('Field data', () => {
    it('Should get field data', () => {
      const schema = {
        firstName: validator.field('text'),
        lastName: validator
          .field('text')
          .ezMetada({})
          .when('firstName', validator.is().present())
          .run(validator.is().present())
      }
      
      expect(schema.lastName.getFieldData().getRules().type?.expected).toBe('text');
    });
  });
});
