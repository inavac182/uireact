import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { UiPrimaryButton } from '../src';

import { uiRender } from '../../../__tests__/utils';

describe('<UiPrimaryButton />', () => {
  test('executes onClick CB', () => {
    const mock = jest.fn();
    uiRender(<UiPrimaryButton onClick={mock}>MyButton</UiPrimaryButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('NOT executes onClick CB if disabled', () => {
    const mock = jest.fn();
    uiRender(
      <UiPrimaryButton onClick={mock} disabled>
        MyButton
      </UiPrimaryButton>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mock).not.toHaveBeenCalled();
  });

  test('renders button', () => {
    uiRender(<UiPrimaryButton>MyButton</UiPrimaryButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10 padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders data test id', () => {
    uiRender(<UiPrimaryButton testId="my-button">MyButton</UiPrimaryButton>);

    expect(screen.getByTestId('my-button')).toBeVisible();
  });

  test('renders disabled', () => {
    uiRender(
      <UiPrimaryButton testId="my-button" disabled>
        MyButton
      </UiPrimaryButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-50 border-secondary-100 color-inverse-fonts-50 padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders disabled icon', () => {
    uiRender(
      <UiPrimaryButton testId="my-button" disabled icon>
        MyButton
      </UiPrimaryButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-50 border-secondary-100 color-inverse-fonts-50 padding-top-one padding-bottom-one padding-left-two padding-right-two buttonIcon');
  });

  test('renders full width', () => {
    uiRender(<UiPrimaryButton fullWidth>MyButton</UiPrimaryButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10 buttonFullWidth padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders full height', () => {
    uiRender(<UiPrimaryButton fullHeight>MyButton</UiPrimaryButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10 buttonFullHeight padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders class name', () => {
    uiRender(
      <UiPrimaryButton testId="my-button" className="something">
        MyButton
      </UiPrimaryButton>
    );

    expect(screen.getByTestId('my-button')).toHaveClass('something');
  });

  test('renders button with submit type', () => {
    uiRender(<UiPrimaryButton type="submit">Button</UiPrimaryButton>);

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });

  test('renders button with padding', () => {
    uiRender(
      <UiPrimaryButton type="submit" padding={{ all: 'two' }}>
        Button
      </UiPrimaryButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10 padding-two buttonRadius');
  });

  test('renders button with margin', () => {
    uiRender(
      <UiPrimaryButton type="submit" margin={{ all: 'two' }}>
        Button
      </UiPrimaryButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10 padding-top-one padding-bottom-one padding-left-two padding-right-two margin-two buttonRadius');
  });

  test('renders rounded', () => {
    uiRender(
      <UiPrimaryButton testId="my-button" rounded size='small'>
        MyButton
      </UiPrimaryButton>
    );

    expect(screen.getByRole('button')).toHaveClass('size-small button bg-secondary-100 border-secondary-150 hover-bg-secondary-150 hover-border-secondary-200 active-bg-secondary-200 active-border-secondary-200 color-inverse-fonts-10 padding-top-one padding-bottom-one padding-left-two padding-right-two radius-small');
  }); 
});
