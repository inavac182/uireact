import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiButtonLink } from '../src';

import 'jest-styled-components';

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
  });

  it('renders fine with spacing', () => {
    uiRender(
      <UiButtonLink padding={{all: 'five'}} margin={{all: 'four'}}>
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with options', () => {
    uiRender(
      <UiButtonLink category="positive" size="large" inverseTextColoration fullWidth fontStyle="bold" wrap>
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with font style italic', () => {
    uiRender(
      <UiButtonLink fontStyle="italic">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with font style italic', () => {
    uiRender(
      <UiButtonLink fontStyle="light">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with font style italic', () => {
    uiRender(
      <UiButtonLink fontStyle="regular">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with dark coloration', () => {
    uiRender(
      <UiButtonLink fontStyle="regular" coloration="dark">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with light coloration', () => {
    uiRender(
      <UiButtonLink fontStyle="regular" coloration="light">
        <a href="#">Link</a>
      </UiButtonLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });
});
