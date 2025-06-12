import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { UiSecondaryButton } from '../src';

import { uiRender } from '../../../__tests__/utils';

describe('<UiSecondaryButton />', () => {
  test('executes onClick CB', () => {
    const mock = jest.fn();
    uiRender(<UiSecondaryButton onClick={mock}>MyButton</UiSecondaryButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('NOT executes onClick CB if disabled', () => {
    const mock = jest.fn();
    uiRender(
      <UiSecondaryButton onClick={mock} disabled>
        MyButton
      </UiSecondaryButton>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mock).not.toHaveBeenCalled();
  });

  test('renders primary button', () => {
    uiRender(<UiSecondaryButton>MyButton</UiSecondaryButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200');
  });

  test('renders data test id', () => {
    uiRender(<UiSecondaryButton testId="my-button">MyButton</UiSecondaryButton>);

    expect(screen.getByTestId('my-button')).toBeVisible();
  });

  test('renders disabled', () => {
    uiRender(
      <UiSecondaryButton testId="my-button" disabled>
        MyButton
      </UiSecondaryButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-50 border-secondary-100 color-inverse-fonts-50 padding-top-two padding-bottom-two padding-left-three padding-right-three buttonRadius');
  });

  test('renders disabled icon', () => {
    uiRender(
      <UiSecondaryButton testId="my-button" disabled icon>
        MyButton
      </UiSecondaryButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-50 border-secondary-100 color-inverse-fonts-50 padding-top-two padding-bottom-two padding-left-three padding-right-three buttonIcon');
  });

  test('renders full width', () => {
    uiRender(<UiSecondaryButton fullWidth>MyButton</UiSecondaryButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200');
  });

  test('renders full height', () => {
    uiRender(<UiSecondaryButton fullHeight>MyButton</UiSecondaryButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200');
  });

  test('renders class name', () => {
    uiRender(
      <UiSecondaryButton testId="my-button" className="something">
        MyButton
      </UiSecondaryButton>
    );

    expect(screen.getByTestId('my-button')).toHaveClass('something');
  });

  test('renders button with submit type', () => {
    uiRender(<UiSecondaryButton type="submit">Button</UiSecondaryButton>);

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });

  test('renders button with padding', () => {
    uiRender(
      <UiSecondaryButton type="submit" padding={{ all: 'two' }}>
        Button
      </UiSecondaryButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200 padding-two');
  });

  test('renders button with margin', () => {
    uiRender(
      <UiSecondaryButton type="submit" margin={{ all: 'two' }}>
        Button
      </UiSecondaryButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-primary-100 border-primary-150 hover-bg-primary-150 active-bg-primary-200 margin-two');
  });

  test('renders rounded', () => {
    uiRender(
      <UiSecondaryButton testId="my-button" rounded size='large'>
        MyButton
      </UiSecondaryButton>
    );

    expect(screen.getByRole('button')).toHaveClass('size-large button bg-primary-100 border-primary-150 hover-bg-primary-150 hover-border-primary-200 active-bg-primary-200 active-border-primary-200 color-secondary-100 padding-top-two padding-bottom-two padding-left-three padding-right-three radius-large');
  }); 
});
