import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLinearChart } from '../src/';

describe('<UiLinearChart />', () => {
  it('renders fine', () => {
    uiRender(<UiLinearChart />);

    expect(screen.getByText('UiLinearChart')).toBeVisible();
  });
});
