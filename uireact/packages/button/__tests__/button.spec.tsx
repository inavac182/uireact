import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { UiButton } from '../src';

import { uiRender } from '../../../__tests__/utils';

import 'jest-styled-components';

describe('<UiButton />', () => {
  test('executes onClick CB', () => {
    const mock = jest.fn();
    uiRender(<UiButton onClick={mock}>MyButton</UiButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('NOT executes onClick CB if disabled', () => {
    const mock = jest.fn();
    uiRender(
      <UiButton onClick={mock} disabled>
        MyButton
      </UiButton>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mock).not.toHaveBeenCalled();
  });

  test('renders primary button', () => {
    uiRender(<UiButton>MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'var(--primary-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--primary-token_50)');
    expect(screen.getByRole('button')).toHaveStyleRule('color', 'var(--fonts-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '3px');
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

  test('renders when is clear', () => {
    uiRender(<UiButton styling="clear">MyButton</UiButton>);

    expect(screen.getByRole('button')).toBeVisible();
  });

  test('renders full height', () => {
    uiRender(<UiButton fullHeight>MyButton</UiButton>);

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
    uiRender(<UiButton category="secondary">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'var(--secondary-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--secondary-token_50)');
  });

  test('renders tertiary button', () => {
    uiRender(<UiButton category="tertiary">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'var(--tertiary-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--tertiary-token_50)');
  });

  test('renders positive button', () => {
    uiRender(<UiButton category="positive">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'var(--positive-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--positive-token_50)');
  });

  test('renders negative button', () => {
    uiRender(<UiButton category="negative">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'var(--negative-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--negative-token_50)');
  });

  test('renders error button', () => {
    uiRender(<UiButton category="error">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'var(--error-token_100)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--error-token_50)');
  });

  test('renders rounded button', () => {
    uiRender(
      <UiButton category="error" rounded>
        MyButton
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '15px/50%');
  });

  test('renders icon button', () => {
    uiRender(
      <UiButton category="error" styling="icon">
        A
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'A' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('border-radius', '50%');
    expect(screen.getByRole('button')).toHaveStyleRule('border-width', '0px');
  });

  test('renders button with submit type', () => {
    uiRender(<UiButton type="submit">Button</UiButton>);

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });

  test('renders button with padding', () => {
    uiRender(
      <UiButton type="submit" padding={{ all: 'two' }}>
        Button
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('padding', 'var(--spacing-two)');
  });

  test('renders button when outlined', () => {
    uiRender(
      <UiButton type="submit" styling="outlined">
        Button
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'transparent');
    expect(screen.getByRole('button')).toHaveStyleRule('color', 'var(--primary-token_100)!important');
    expect(screen.getByRole('button')).toHaveStyleRule('fill', 'var(--primary-token_100)!important');
    expect(screen.getByRole('button')).toHaveStyleRule('border-color', 'var(--primary-token_50)');
    expect(screen.getByRole('button')).toHaveStyleRule('border-width', '2px');
  });
});
