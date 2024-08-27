import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { UiTertiaryButton } from '../src';

import { uiRender } from '../../../__tests__/utils';

describe('<UiTertiaryButton />', () => {
  test('executes onClick CB', () => {
    const mock = jest.fn();
    uiRender(<UiTertiaryButton onClick={mock}>MyButton</UiTertiaryButton>);

    fireEvent.click(screen.getByRole('button'));

    expect(mock).toHaveBeenCalledTimes(1);
  });

  test('NOT executes onClick CB if disabled', () => {
    const mock = jest.fn();
    uiRender(
      <UiTertiaryButton onClick={mock} disabled>
        MyButton
      </UiTertiaryButton>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(mock).not.toHaveBeenCalled();
  });

  test('renders button', () => {
    uiRender(<UiTertiaryButton>MyButton</UiTertiaryButton>);

    expect(screen.getByRole('button', { name: 'MyButton' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders data test id', () => {
    uiRender(<UiTertiaryButton testId="my-button">MyButton</UiTertiaryButton>);

    expect(screen.getByTestId('my-button')).toBeVisible();
  });

  test('renders disabled', () => {
    uiRender(
      <UiTertiaryButton testId="my-button" disabled>
        MyButton
      </UiTertiaryButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent bg-primary-100 color-secondary-50 padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders disabled icon', () => {
    uiRender(
      <UiTertiaryButton testId="my-button" disabled icon>
        MyButton
      </UiTertiaryButton>
    );

    expect(screen.getByTestId('my-button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent bg-primary-100 color-secondary-50 padding-top-one padding-bottom-one padding-left-two padding-right-two buttonIcon');
  }); 

  test('renders rounded', () => {
    uiRender(
      <UiTertiaryButton testId="my-button" rounded>
        MyButton
      </UiTertiaryButton>
    );

    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 padding-top-one padding-bottom-one padding-left-two padding-right-two radius-regular');
  }); 

  test('renders full width', () => {
    uiRender(<UiTertiaryButton fullWidth>MyButton</UiTertiaryButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 buttonFullWidth padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders full height', () => {
    uiRender(<UiTertiaryButton fullHeight>MyButton</UiTertiaryButton>);

    expect(screen.getByRole('button')).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 buttonFullHeight padding-top-one padding-bottom-one padding-left-two padding-right-two buttonRadius');
  });

  test('renders class name', () => {
    uiRender(
      <UiTertiaryButton testId="my-button" className="something">
        MyButton
      </UiTertiaryButton>
    );

    expect(screen.getByTestId('my-button')).toHaveClass('something');
  });

  test('renders button with submit type', () => {
    uiRender(<UiTertiaryButton type="submit">Button</UiTertiaryButton>);

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
  });

  test('renders button with padding', () => {
    uiRender(
      <UiTertiaryButton type="submit" padding={{ all: 'two' }}>
        Button
      </UiTertiaryButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('button transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 padding-two buttonRadius');
  });

  test('renders button with margin', () => {
    uiRender(
      <UiTertiaryButton type="submit" margin={{ all: 'two' }}>
        Button
      </UiTertiaryButton>
    );

    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible();
    expect(screen.getByRole('button')).toHaveClass('size-regular button transparent hover-bg-primary-100 color-secondary-100 active-bg-primary-150 padding-top-one padding-bottom-one padding-left-two padding-right-two margin-two buttonRadius');
  });
});
