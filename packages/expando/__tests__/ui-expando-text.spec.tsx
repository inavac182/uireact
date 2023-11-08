import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiExpandoText } from '../src';

import 'jest-styled-components';

describe('<UiExpandoText />', () => {
  it('renders fine', () => {
    uiRender(
      <UiExpandoText label="Some label" className="some-class" testId="some-test-id">
        <p>Content</p>
      </UiExpandoText>
    );

    expect(screen.getByText('Some label')).toBeVisible();
    expect(screen.getByTestId('expando-text-trigger')).toHaveStyleRule('color', 'var(--tertiary-token_100)');
    expect(screen.getByTestId('expando-trigger')).toHaveStyleRule('font-size', 'var(--texts-regular)');
    expect(screen.getByTestId('some-test-id')).toHaveClass('some-class');

    fireEvent.click(screen.getByText('Some label'));

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine when initial expanded is true', () => {
    uiRender(
      <UiExpandoText label="Some label" expanded>
        <p>Content</p>
      </UiExpandoText>
    );

    expect(screen.getByText('Some label')).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(
      <UiExpandoText label="Some label" size="large">
        <p>Content</p>
      </UiExpandoText>
    );

    expect(screen.getByText('Some label')).toBeVisible();
    expect(screen.getByTestId('expando-trigger')).toHaveStyleRule('font-size', 'var(--texts-large)');

    fireEvent.click(screen.getByText('Some label'));

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine with category and inverse', () => {
    uiRender(
      <UiExpandoText category="positive" label="Some label" inverseColoration>
        <p>Content</p>
      </UiExpandoText>
    );

    expect(screen.getByText('Some label')).toBeVisible();
    expect(screen.getByTestId('expando-text-trigger')).toHaveStyleRule('color', 'var(--inverse-positive-token_100)');
  });

  it('renders fine with category and no inverse', () => {
    uiRender(
      <UiExpandoText category="positive" label="Some label">
        <p>Content</p>
      </UiExpandoText>
    );

    expect(screen.getByText('Some label')).toBeVisible();
    expect(screen.getByTestId('expando-text-trigger')).toHaveStyleRule('color', 'var(--positive-token_100)');
  });

  it('triggers callback', () => {
    const callbackFn = jest.fn();

    uiRender(
      <UiExpandoText label="Some label" onChange={callbackFn}>
        <p>Content</p>
      </UiExpandoText>
    );

    fireEvent.click(screen.getByText('Some label'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(callbackFn).toHaveBeenCalledTimes(1);
    expect(callbackFn).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByText('Some label'));

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    expect(callbackFn).toHaveBeenCalledTimes(2);
    expect(callbackFn).toHaveBeenCalledWith(false);
  });
});
