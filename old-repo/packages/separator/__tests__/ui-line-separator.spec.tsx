import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils';
import { UiLineSeparator } from '../src/';

describe('UiLineSeparator', () => {
  it('Should render correctly', () => {
    uiRender(<UiLineSeparator testId="separator" />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });

  it('Should render correctly on inverse', () => {
    uiRender(<UiLineSeparator testId="separator" inverse />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });

  it('Should render correctly with delay', () => {
    uiRender(<UiLineSeparator testId="separator" delay={200} />);

    expect(screen.getByTestId('separator')).toBeVisible();
  });
});
