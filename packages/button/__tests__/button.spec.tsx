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

  test('renders when is cristal', () => {
    uiRender(<UiButton cristal>MyButton</UiButton>);

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

  test('renders rounded button', () => {
    uiRender(
      <UiButton theme="error" rounded>
        MyButton
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
  });

  test('renders iconized button', () => {
    uiRender(
      <UiButton theme="error" iconized>
        A
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'A' })).toBeVisible();
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
  });

  test('renders button when outlined', () => {
    uiRender(
      <UiButton type="submit" outlined>
        Button
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });
});
