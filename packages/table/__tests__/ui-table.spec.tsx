import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTable } from '../src';

describe('<Component />', () => {
  it('renders fine', () => {
    uiRender(<UiTable />);

    expect(screen.getByText('UiTable')).toBeVisible();
  });
});
