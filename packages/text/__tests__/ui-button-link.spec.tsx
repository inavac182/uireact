import React from 'react';

import { render, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiButtonLink } from '../src';

const onClick = jest.fn();

describe('<UiLink />', () => {
  afterEach(() => {
    onClick.mockClear();
  });

  it('renders fine', () => {
    uiRender(
      <UiButtonLink>
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass(' buttonLink bg-tertiary-100 hover-bg-tertiary-150 active-bg-tertiary-200 color-fonts-100 size-regular padding-top-three padding-bottom-three padding-left-four padding-right-four');
  });

  it('renders fine with spacing', () => {
    uiRender(
      <UiButtonLink padding={{all: 'five'}} margin={{all: 'four'}}>
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-tertiary-100 hover-bg-tertiary-150 active-bg-tertiary-200 color-fonts-100 size-regular margin-four padding-five');
  });

  it('renders fine with options', () => {
    uiRender(
      <UiButtonLink category="positive" size="large" inverseTextColoration fullWidth fontStyle="bold" wrap>
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-positive-100 hover-bg-positive-150 active-bg-positive-200 fullWidth bold color-inverse-fonts-100 size-large wrap padding-top-three padding-bottom-three padding-left-four padding-right-four');
  });

  it('renders fine with rounded', () => {
    uiRender(
      <UiButtonLink category="positive" size="large" rounded>
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-positive-100 border-positive-100 hover-border-positive-150 hover-bg-positive-150 active-bg-positive-200 color-fonts-100 size-large padding-top-three padding-bottom-three padding-left-four padding-right-four radius-large');
  });

  it('renders fine with font style bold', () => {
    uiRender(
      <UiButtonLink fontStyle="bold">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-tertiary-100 hover-bg-tertiary-150 active-bg-tertiary-200 bold color-fonts-100 size-regular padding-top-three padding-bottom-three padding-left-four padding-right-four');
  });

  it('renders fine with font style italic', () => {
    uiRender(
      <UiButtonLink fontStyle="italic">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-tertiary-100 hover-bg-tertiary-150 active-bg-tertiary-200 italic color-fonts-100 size-regular padding-top-three padding-bottom-three padding-left-four padding-right-four');
  });

  it('renders fine with dark coloration', () => {
    uiRender(
      <UiButtonLink fontStyle="slim" coloration="dark">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-tertiary-100 hover-bg-tertiary-150 active-bg-tertiary-200 dark slim');
  });

  it('renders fine with light coloration', () => {
    uiRender(
      <UiButtonLink coloration="light">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link')).toHaveClass('buttonLink bg-tertiary-100 hover-bg-tertiary-150 active-bg-tertiary-200 light');
  });

  it('renders nothing when children component is not valid', () => {
    const { container } = render(
      <UiButtonLink coloration="light">
        asadsad
      </UiButtonLink>
    );

    expect(container.innerHTML).toBe('');
  });
});
