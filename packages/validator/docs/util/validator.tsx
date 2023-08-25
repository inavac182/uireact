import React from 'react';

import { UiText } from '@uireact/text';

import { UiValidator } from '../../src';
import { UiValidatorSchema } from 'types';

type ValidatorRunnerProps = {
  data: { [keys in string]: unknown };
  schema: UiValidatorSchema;
};

export const ValidatorRunner = ({ data, schema }: ValidatorRunnerProps): React.ReactElement => {
  const validator = new UiValidator();

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
