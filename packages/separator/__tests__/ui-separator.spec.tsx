import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiSeparator, UiBubblesSeparator } from '../src/';

describe('UiSeparator', () => {
  it('<UiSeparator />renders fine', () => {
    uiRender(<UiSeparator from="primary" to="secondary" testId="separator" />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });

  it('<UiBubblesSeparator /> renders fine', () => {
    uiRender(<UiBubblesSeparator from="primary" to="secondary" testId="separator" />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });
});
