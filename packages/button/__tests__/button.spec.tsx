import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { UiButton } from '../src';

import { uiRender } from '../../../__tests__/utils';

describe('<UiButton />', () => {
  test('executes onClick CB', () => {
    const mock = jest.fn();
    uiRender(<UiButton onClick={mock}>MyButton</UiButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('renders primary button', () => {
    uiRender(<UiButton>MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });

  test('renders data test id', () => {
    uiRender(<UiButton testId="my-button">MyButton</UiButton>);

    expect(screen.getByTestId('my-button')).toBeVisible();
  });

  test('renders disabled', () => {
    uiRender(
      <UiButton testId="my-button" disabled>
        MyButton
      </UiButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
  });

  test('renders full width', () => {
    uiRender(<UiButton fullWidth>MyButton</UiButton>);

    expect(screen.getByRole('button')).toBeVisible();
  });

  test('renders class name', () => {
    uiRender(
      <UiButton testId="my-button" className="something">
        MyButton
      </UiButton>
    );

    expect(screen.getByTestId('my-button')).toHaveClass('something');
  });

  test('renders secondary button', () => {
    uiRender(<UiButton theme="secondary">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });

  test('renders tertiary button', () => {
    uiRender(<UiButton theme="tertiary">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });

  test('renders positive button', () => {
    uiRender(<UiButton theme="positive">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });

  test('renders negative button', () => {
    uiRender(<UiButton theme="negative">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });

  test('renders error button', () => {
    uiRender(<UiButton theme="error">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });
});
