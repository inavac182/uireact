import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils';
import { UiEzForm } from '../src';

describe('<UiEzForm />', () => {
  it('Should render correctly', () => {
    uiRender(<UiEzForm schema={{}} />);

    expect(screen.getByText('Content')).toBeVisible();
  });
});
