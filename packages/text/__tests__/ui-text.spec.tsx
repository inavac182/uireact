import React from 'react';

import { screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiText } from '../src';
import { TextSize } from '@uireact/foundation';

describe('<UiText />', () => {
  it('renders fine', () => {
    uiRender(<UiText>Text</UiText>);

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

  it('renders fine when size is provided', () => {
    uiRender(<UiText size={TextSize.large}>Text</UiText>);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is POSITIVE', () => {
    uiRender(
      <UiText size={TextSize.large} theme="positive">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is ERROR', () => {
    uiRender(
      <UiText size={TextSize.large} theme="error">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is NEGATIVE', () => {
    uiRender(
      <UiText size={TextSize.large} theme="negative">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('renders fine when state is unrecognized', () => {
    uiRender(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      <UiText size={TextSize.large} theme="XXXXXX">
        Text
      </UiText>
    );

    expect(screen.getByText('Text')).toBeVisible();
  });
});
