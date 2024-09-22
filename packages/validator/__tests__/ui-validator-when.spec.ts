import { UiValidator } from '../src';

const validator = new UiValidator();

describe('When', () => {
  it('Should run validations correctly', () => {
    const schema = {
      firstName: validator.field('text'),
      lastName: validator
        .field('text')
        .ezMetada({})
        .when('fistName', validator.is().present())
        .run()
        .isRequired()
    }
  });
});