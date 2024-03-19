import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiBubblesSeparator } from '../src/';

describe('<UiBubblesSeparator />', () => {
  it(' renders fine', () => {
    uiRender(<UiBubblesSeparator from="primary" to="secondary" testId="separator" />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });

  it(' renders fine inversed', () => {
    uiRender(<UiBubblesSeparator from="primary" to="secondary" testId="separator" inverse />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });
});
