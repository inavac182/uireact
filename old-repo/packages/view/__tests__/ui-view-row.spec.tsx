import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils';
import { UiViewRow } from '../src';

import 'jest-styled-components';

describe('<UiViewRow />', () => {
  it('Should render fine', () => {
    uiRender(
      <UiViewRow testId="UiViewRow">
        <p>Content 1</p>
        <p>Content 2</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('color', 'var(--fonts-token_100)');
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('background-color', 'var(--primary-token_100)');
  });

  it('Should render fine when is centered', () => {
    uiRender(
      <UiViewRow centeredContent>
        <p>Content 1</p>
        <p>Content 2</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('Should render fine when is centered and width xlarge', () => {
    global.innerWidth = 1450;
    uiRender(
      <UiViewRow centeredContent>
        <p>Content 1</p>
        <p>Content 2</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('Should add class name', () => {
    uiRender(<UiViewRow className="someClass">Content 1</UiViewRow>);

    expect(screen.getByText('Content 1')).toHaveClass('someClass');
  });

  it('Should render fine with category', () => {
    uiRender(
      <UiViewRow category="secondary" testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('background-color', 'var(--secondary-token_100)');
  });

  it('Should render fine with inversed font', () => {
    uiRender(
      <UiViewRow category="secondary" inverseFont testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('color', 'var(--inverse-fonts-token_100)');
  });

  it('Should render fine with noBackground and inverse font', () => {
    uiRender(
      <UiViewRow inverseFont noBackground testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('color', 'var(--inverse-fonts-token_100)');
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('background-color', 'transparent');
  });

  it('Should render fine with noBackground', () => {
    uiRender(
      <UiViewRow noBackground testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('background-color', 'transparent');
  });

  it('Should render fine with weight and category', () => {
    uiRender(
      <UiViewRow testId="UiViewRow" weight="10" category="secondary">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('color', 'var(--fonts-token_10)');
    expect(screen.getByTestId('UiViewRow')).toHaveStyleRule('background-color', 'var(--secondary-token_10)');
  });
});
