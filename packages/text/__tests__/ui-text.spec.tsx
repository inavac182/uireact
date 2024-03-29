import React from 'react';

import { screen } from '@testing-library/react';
import { DefaultTheme, ThemeColor } from '@uireact/foundation';

import { uiRender } from '../../../__tests__/utils/render';
import { UiText } from '../src';

import 'jest-styled-components';

describe('<UiText />', () => {
  it('renders fine', () => {
    uiRender(<UiText>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveStyleRule('color', 'var(--fonts-token_100)');
  });

  it('renders fine with class name', () => {
    uiRender(<UiText className="text">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveClass('text');
  });

  it('renders fine aligned right', () => {
    uiRender(<UiText align="right">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(<UiText inverseColoration>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveStyleRule('color', 'var(--inverse-fonts-token_100)');
  });

  it('renders fine with dark coloration', () => {
    uiRender(<UiText coloration="dark">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveStyleRule('color', DefaultTheme.dark.fonts.token_100);
  });

  it('renders fine with light coloration', () => {
    uiRender(<UiText coloration="light">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Text')).toHaveStyleRule('color', DefaultTheme.light.fonts.token_100);
  });

  it('renders fine with wrap', () => {
    uiRender(<UiText wrap>Text</UiText>);

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

  it('renders fine with inverse coloration only in light theme with category', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    uiRender(<UiText inverseColoration={'ssss'}>Text</UiText>, ThemeColor.light);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when is centered', () => {
    uiRender(<UiText centered>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when is inline', () => {
    uiRender(<UiText inline>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when style is italic', () => {
    uiRender(
      <UiText inline fontStyle="italic">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when style is bold', () => {
    uiRender(
      <UiText inline fontStyle="bold">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when style is regular', () => {
    uiRender(
      <UiText inline fontStyle="regular">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when style is light', () => {
    uiRender(
      <UiText inline fontStyle="light">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when size is provided', () => {
    uiRender(<UiText size="large">Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is POSITIVE', () => {
    uiRender(
      <UiText size="large" category="positive">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is ERROR', () => {
    uiRender(
      <UiText size="large" category="error">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is NEGATIVE', () => {
    uiRender(
      <UiText size="large" category="negative">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is unrecognized', () => {
    uiRender(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      <UiText size="large" category="XXXXXX">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });
});
