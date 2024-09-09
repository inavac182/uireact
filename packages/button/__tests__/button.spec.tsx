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
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200');
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
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-10 buttonRadius');
  });

  test('renders disabled icon', () => {
    uiRender(
      <UiButton testId="my-button" disabled styling='icon'>
        MyButton
      </UiButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('button buttonIcon bg-primary-10 buttonIcon');
  });

  test('renders disabled clear', () => {
    uiRender(
      <UiButton testId="my-button" disabled styling='clear'>
        MyButton
      </UiButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('button buttonClear bg-primary-10 buttonRadius');
  });

  test('renders disabled outlined', () => {
    uiRender(
      <UiButton testId="my-button" disabled styling='outlined'>
        MyButton
      </UiButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('button buttonOutlined border-primary-10 buttonRadius');
  });

  test('renders full width', () => {
    uiRender(<UiButton fullWidth>MyButton</UiButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200');
  });

  test('renders when is clear', () => {
    uiRender(<UiButton styling="clear">MyButton</UiButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button buttonClear hover-bg-primary-10 active-bg-primary-50 buttonRadius');
  });

  test('renders full height', () => {
    uiRender(<UiButton fullHeight>MyButton</UiButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200');
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
    expect(screen.getByRole('button')).toHaveClass('button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 active-bg-secondary-200');
  });

  test('renders tertiary button', () => {
    uiRender(<UiButton category="tertiary">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-tertiary-100 border-tertiary-150 hover-bg-tertiary-150 active-bg-tertiary-200');
  });

  test('renders positive button', () => {
    uiRender(<UiButton category="positive">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-positive-100 border-positive-150 hover-bg-positive-150 active-bg-positive-200');
  });

  test('renders negative button', () => {
    uiRender(<UiButton category="negative">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-negative-100 border-negative-150 hover-bg-negative-150 active-bg-negative-200');
  });

  test('renders error button', () => {
    uiRender(<UiButton category="error">MyButton</UiButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-error-100 border-error-150 hover-bg-error-150 active-bg-error-200');
  });

  test('renders rounded button', () => {
    uiRender(
      <UiButton category="error" rounded>
        MyButton
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-error-100 border-error-150 hover-bg-error-150 active-bg-error-200');
  });

  test('renders icon button', () => {
    uiRender(
      <UiButton category="error" styling="icon">
        A
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'A' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button buttonIcon hover-bg-error-150 active-bg-error-200');
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
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200 padding-two');
  });

  test('renders button with margin', () => {
    uiRender(
      <UiButton type="submit" margin={{ all: 'two' }}>
        Button
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200 margin-two');
  });

  test('renders button when outlined', () => {
    uiRender(
      <UiButton type="submit" styling="outlined">
        Button
      </UiButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button buttonOutlined border-primary-100 hover-bg-primary-10 active-bg-primary-50 color-primary-100 hover-color-primary-100 buttonRadius');
  });
});
