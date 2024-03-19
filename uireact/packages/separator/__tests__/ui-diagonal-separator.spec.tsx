import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDiagonalSeparator } from '../src';

describe('<UiDiagonalSeparator />', () => {
  it('renders fine', () => {
    uiRender(<UiDiagonalSeparator from="primary" to="secondary" testId="separator" />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });

  it('renders fine inversed', () => {
    uiRender(<UiDiagonalSeparator from="primary" to="secondary" testId="separator" inverse />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });
});
