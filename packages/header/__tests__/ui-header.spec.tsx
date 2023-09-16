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
    expect(screen.getByTestId('UiHeader')).toHaveStyleRule('background-color', 'var(--primary-token_100)');
    expect(screen.getByTestId('UiHeader')).toHaveStyleRule('color', 'var(--fonts-token_100)');
    expect(screen.getByTestId('UiHeader')).toHaveStyleRule('border-color', 'var(--primary-token_150)');
  });

  it('renders fine with weight', () => {
    uiRender(
      <UiHeader weight="150" testId="UiHeader">
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByTestId('UiHeader')).toHaveStyleRule('background-color', 'var(--primary-token_150)');
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
    expect(screen.getByTestId('UiHeader')).toHaveStyleRule('position', 'sticky');
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
      <UiHeader centered className="something">
        <p>Header</p>
      </UiHeader>
    );

    expect(screen.getByText('Header')).toBeVisible();
  });
});
