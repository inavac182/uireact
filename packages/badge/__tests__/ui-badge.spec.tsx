import React from 'react';

import { screen } from '@testing-library/react';
import { TextSize } from '@uireact/foundation';

import { uiRender } from '../../../__tests__/utils/render';
import { UiBadge } from '../src/ui-badge';

describe('<UiBadge />', () => {
  it('renders fine', () => {
    uiRender(<UiBadge testId="UiBadge">Badge</UiBadge>);

    expect(screen.getByText('Badge')).toBeVisible();
    expect(screen.getByTestId('UiBadge')).toHaveClass('badge bg-primary-10 color-primary-200 border-primary-200 size-small radius-small');
  });

  it('renders fine with size', () => {
    uiRender(
      <UiBadge size="large" testId="UiBadge">
        Badge
      </UiBadge>
    );

    expect(screen.getByText('Badge')).toBeVisible();
    expect(screen.getByTestId('UiBadge')).toHaveClass('badge bg-primary-10 color-primary-200 border-primary-200 size-large radius-large');
  });

  it('renders fine with category', () => {
    uiRender(
      <UiBadge size={TextSize.regular} category="warning" testId="UiBadge">
        Badge
      </UiBadge>
    );

    expect(screen.getByText('Badge')).toBeVisible();
    expect(screen.getByTestId('UiBadge')).toHaveClass('badge bg-warning-10 color-warning-200 border-warning-200 size-regular radius-regular');
  });
});
