import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiExpandoCard } from '../src';

import 'jest-styled-components';

describe('<UiExpandoCard />', () => {
  it('renders fine', () => {
    uiRender(
      <UiExpandoCard
        expandLabel="Expand label"
        collapseLabel="Collapse label"
        className="some-class"
        testId="some-test-id"
      >
        <p>Content</p>
      </UiExpandoCard>
    );

    expect(screen.getByText('Expand label')).toBeVisible();
    expect(screen.getByTestId('expando-heading-trigger')).toHaveStyleRule('color', 'var(--fonts-token_100)');
    expect(screen.getByTestId('expando-heading-trigger')).toHaveStyleRule('font-size', 'var(--headings-level3)');
    expect(screen.getByTestId('some-test-id')).toHaveClass('some-class');

    fireEvent.click(screen.getByText('Expand label'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByText('Collapse label')).toBeVisible();
  });

  it('renders fine when initial expanded is true', () => {
    uiRender(
      <UiExpandoCard expandLabel="Expand label" collapseLabel="Collapse label" expanded>
        <p>Content</p>
      </UiExpandoCard>
    );

    expect(screen.getByText('Collapse label')).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine with category', () => {
    uiRender(
      <UiExpandoCard category="positive" expandLabel="Expand label" collapseLabel="Collapse label">
        <p>Content</p>
      </UiExpandoCard>
    );

    expect(screen.getByText('Expand label')).toBeVisible();
  });

  it('renders fine with inverse coloration', () => {
    uiRender(
      <UiExpandoCard
        category="positive"
        expandLabel="Expand label"
        collapseLabel="Collapse label"
        headingInverseColoration
      >
        <p>Content</p>
      </UiExpandoCard>
    );

    expect(screen.getByText('Expand label')).toBeVisible();
    expect(screen.getByTestId('expando-heading-trigger')).toHaveStyleRule('color', 'var(--inverse-fonts-token_100)');
  });

  it('triggers callback', () => {
    const callbackFn = jest.fn();

    uiRender(
      <UiExpandoCard expandLabel="Expand label" collapseLabel="Collapse label" onChange={callbackFn}>
        <p>Content</p>
      </UiExpandoCard>
    );

    fireEvent.click(screen.getByText('Expand label'));

    expect(screen.getByText('Content')).toBeVisible();
    expect(callbackFn).toHaveBeenCalledTimes(1);
    expect(callbackFn).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByText('Collapse label'));

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    expect(callbackFn).toHaveBeenCalledTimes(2);
    expect(callbackFn).toHaveBeenCalledWith(false);
  });
});
