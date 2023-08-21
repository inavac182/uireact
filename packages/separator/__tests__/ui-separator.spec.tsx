import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiSeparator } from '../src/';

describe('<UiSeparator />', () => {
  it('renders fine', () => {
    uiRender(<UiSeparator from="primary" to="secondary" testId="separator" />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });

  it('renders fine inversed', () => {
    uiRender(<UiSeparator from="primary" to="secondary" testId="separator" inverse />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });
});
