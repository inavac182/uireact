import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils';
import { UiViewRow } from '../src';

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
    expect(screen.getByTestId('UiViewRow')).toHaveClass('bg-primary-100 color-fonts-100');
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
    uiRender(<UiViewRow className="someClass" testId='UiViewRow'>Content 1</UiViewRow>);

    expect(screen.getByTestId('UiViewRow')).toHaveClass('someClass');
  });

  it('Should render fine with category', () => {
    uiRender(
      <UiViewRow category="secondary" testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveClass('bg-secondary-100 color-fonts-100');
  });

  it('Should render fine with inversed font', () => {
    uiRender(
      <UiViewRow category="secondary" inverseFont testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveClass('bg-secondary-100 color-inverse-fonts-100');
  });

  it('Should render fine with noBackground and inverse font', () => {
    uiRender(
      <UiViewRow inverseFont noBackground testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveClass('color-inverse-fonts-100');
  });

  it('Should render fine with noBackground', () => {
    uiRender(
      <UiViewRow noBackground testId="UiViewRow">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('Should render fine with weight and category', () => {
    uiRender(
      <UiViewRow testId="UiViewRow" weight="10" category="secondary">
        <p>Content 1</p>
      </UiViewRow>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByTestId('UiViewRow')).toHaveClass('bg-secondary-10 color-fonts-100');
  });
});
