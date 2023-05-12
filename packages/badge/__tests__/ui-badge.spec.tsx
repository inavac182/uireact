import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiBadge } from '../src/ui-badge';
import { TextSize } from '@uireact/foundation';

describe('<UiBadge />', () => {
  it('renders fine', () => {
    uiRender(<UiBadge>Badge</UiBadge>);

    expect(screen.getByText('Badge')).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(<UiBadge size={TextSize.regular}>Badge</UiBadge>);

    expect(screen.getByText('Badge')).toBeVisible();
  });
});
