import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiBadge } from '../src/ui-badge';
import { TextSize } from '@uireact/foundation';

import 'jest-styled-components';

describe('<UiBadge />', () => {
  it('renders fine', () => {
    uiRender(<UiBadge testId="UiBadge">Badge</UiBadge>);

    expect(screen.getByText('Badge')).toBeVisible();
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('background-color', 'var(--primary-token_10)');
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('color', 'var(--primary-token_200)!important');
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('border-color', 'var(--primary-token_200)');
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('font-size', 'var(--texts-small)');
  });

  it('renders fine with size', () => {
    uiRender(
      <UiBadge size="large" testId="UiBadge">
        Badge
      </UiBadge>
    );

    expect(screen.getByText('Badge')).toBeVisible();
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('font-size', 'var(--texts-large)');
  });

  it('renders fine with category', () => {
    uiRender(
      <UiBadge size={TextSize.regular} category="warning" testId="UiBadge">
        Badge
      </UiBadge>
    );

    expect(screen.getByText('Badge')).toBeVisible();
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('background-color', 'var(--warning-token_10)');
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('color', 'var(--warning-token_200)!important');
    expect(screen.getByTestId('UiBadge')).toHaveStyleRule('border-color', 'var(--warning-token_200)');
  });
});
