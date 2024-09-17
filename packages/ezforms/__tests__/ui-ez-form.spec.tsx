import React from 'react';

import { screen } from '@testing-library/react';

import { UiValidator } from '@uireact/validator';

import { uiRender } from '../../../__tests__/utils';
import { UiEzForm } from '../src';

const validator = new UiValidator();

describe('<UiEzForm />', () => {
  it('Should render correctly', () => {
    uiRender(<UiEzForm schema={{}} />);

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('Should render correctly', () => {
    const schema = {
      field: validator.ruler().isRequired()
    }
    uiRender(<UiEzForm schema={schema} />);

    expect(screen.getByText('Content')).toBeVisible();
  });
});
