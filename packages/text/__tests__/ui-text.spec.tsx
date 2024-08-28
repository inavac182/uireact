import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiText } from '../src';

describe('<UiText />', () => {
  it('renders fine', () => {
    uiRender(<UiText>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular');
  });

  it('renders fine with spacing', () => {
    uiRender(<UiText margin={{ all: 'four' }} padding={{ all: 'three' }}>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular margin-four padding-three');
  });

  it('renders fine with class name', () => {
    uiRender(<UiText className="text">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('text color-fonts-100 size-regular');
  });

  it('renders fine aligned right', () => {
    uiRender(<UiText align="right">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular alignRight');
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiText inverseColoration>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-inverse-fonts-100 size-regular');
  });

  it('renders fine with dark coloration', () => {
    uiRender(<UiText coloration="dark">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular dark');
  });

  it('renders fine with light coloration', () => {
    uiRender(<UiText coloration="light">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular light');
  });

  it('renders fine with wrap', () => {
    uiRender(<UiText wrap='break'>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine with inverse coloration and inline', () => {
    uiRender(
      <UiText inline inverseColoration>
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when is centered', () => {
    uiRender(<UiText align='center'>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular alignCenter');
  });

  it('renders fine when is inline', () => {
    uiRender(<UiText inline>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular');
  });

  it('renders fine when style is bold', () => {
    uiRender(
      <UiText inline fontStyle="bold">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular bold');
  });

  it('renders fine when style is slim', () => {
    uiRender(
      <UiText inline fontStyle="slim">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular slim');
  });

  it('renders fine when style is bold', () => {
    uiRender(
      <UiText inline fontStyle="bold">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular bold');
  });

  it('renders fine when style is italic', () => {
    uiRender(
      <UiText inline fontStyle="italic">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-regular italic');
  });

  it('renders fine when size is provided', () => {
    uiRender(<UiText size="large">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-fonts-100 size-large');
  });

  it('renders fine when state is POSITIVE', () => {
    uiRender(
      <UiText size="large" category="positive">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-positive-100 size-large');
  });

  it('renders fine when state is ERROR', () => {
    uiRender(
      <UiText size="large" category="error">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-error-100 size-large');
  });

  it('renders fine when state is NEGATIVE', () => {
    uiRender(
      <UiText size="large" category="negative">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('color-negative-100 size-large');
  });

  it('renders fine when state is unrecognized', () => {
    uiRender(
      //@ts-ignore
      <UiText size="large" category="XXXXXX">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });
});
