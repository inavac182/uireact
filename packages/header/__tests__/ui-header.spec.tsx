import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiHeader } from '../src/ui-header';

import 'jest-styled-components';

describe('<UiHeader />', () => {
  beforeEach(() => {
    global.innerWidth = 1080;
  });

  it('renders fine', () => {
    uiRender(
      <UiHeader testId="UiHeader">
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByTestId('UiHeader')).toHaveClass('header bg-primary-100');
  });

  it('renders fine with weight', () => {
    uiRender(
      <UiHeader weight="150" testId="UiHeader">
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByTestId('UiHeader')).toHaveClass('header bg-primary-150');
  });

  it('renders fine if is centered', () => {
    uiRender(
      <UiHeader centered>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });

  it('renders fine if is fixed', () => {
    uiRender(
      <UiHeader fixed testId="UiHeader">
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByTestId('UiHeader')).toHaveClass('header stickyHeader bg-primary-100');
  });

  it('renders fine if is centered and xl', () => {
    global.innerWidth = 1450;

    uiRender(
      <UiHeader centered>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });

  it('renders fine with className', () => {
    uiRender(
      <UiHeader centered className="something" testId='UiHeader'>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByTestId('UiHeader')).toHaveClass('something header bg-primary-100 padding-four');
  });

  it('renders fine with padding', () => {
    uiRender(
      <UiHeader centered padding={{ inline: 'six' }} testId='UiHeader'>
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByTestId('UiHeader')).toHaveClass('header bg-primary-100 padding-left-six padding-right-six');
  });
});
