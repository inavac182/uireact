import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiIcon } from '../src';

describe('<UiIcon />', () => {
  it('renders fine', () => {
    uiRender(<UiIcon id="picture" />);

    expect(screen.getByRole('img', { name: 'picture' })).toBeVisible();
  });

  it('renders nothing if id is unrecognized', () => {
    uiRender(<UiIcon id="XXXXXX" />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
