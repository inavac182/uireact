import React from 'react';

import { UiText } from '@uireact/text';

import { UiValidator } from '../../src';

type ValidatorRunnerProps = {
  data: { [keys in string]: unknown };
};

export const ValidatorRunner = ({ data }: ValidatorRunnerProps): React.ReactElement => {
  const validator = new UiValidator();

  const schema = {
    firstName: validator.ruler().isRequired('First Name is required').range(0, 10, 'First name is not valid'),
    email: validator.ruler().isRequired('Email is required').type('email', 'Email is not valid'),
  };

  return (
    <UiText>
      Result:{' '}
      {validator.validate(schema, data).passed ? (
        <UiText category="positive" inline>
          passed 🤠
        </UiText>
      ) : (
        <UiText category="error" inline>
          failed 🤡
        </UiText>
      )}
    </UiText>
  );
};
