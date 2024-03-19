import * as React from 'react';

import { render, screen } from '@testing-library/react';

import { UiSpacing } from '../../src';

import 'jest-styled-components';

describe('UiSpacing', () => {
  it('Should render children', () => {
    render(
      <UiSpacing>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByText('Test')).toBeVisible();
  });

  it('Should render correct margin when using all', () => {
    render(
      <UiSpacing testId="spacing-container" margin={{ all: 'one' }}>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByTestId('spacing-container')).toHaveStyleRule('margin', 'var(--spacing-one)');
  });

  it('Should render correct padding when using inline', () => {
    render(
      <UiSpacing testId="spacing-container" padding={{ inline: 'two' }}>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByTestId('spacing-container')).toHaveStyleRule('padding', '0px var(--spacing-two)');
  });

  it('Should render correct margin when using block', () => {
    render(
      <UiSpacing testId="spacing-container" margin={{ block: 'four' }}>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByTestId('spacing-container')).toHaveStyleRule('margin', 'var(--spacing-four) 0px');
  });

  it('Should render correct margin when using block and inline', () => {
    render(
      <UiSpacing testId="spacing-container" margin={{ inline: 'three', block: 'four' }}>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByTestId('spacing-container')).toHaveStyleRule(
      'margin',
      'var(--spacing-four) var(--spacing-three)'
    );
  });

  it('Should set margin individually', () => {
    render(
      <UiSpacing testId="spacing-container" margin={{ top: 'four', left: 'one' }} inline>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByTestId('spacing-container')).toHaveStyleRule(
      'margin',
      'var(--spacing-four) 0px 0px var(--spacing-one)'
    );
  });

  it('Should set padding individually', () => {
    render(
      <UiSpacing testId="spacing-container" margin={{ right: 'four', bottom: 'one' }}>
        <p>Test</p>
      </UiSpacing>
    );

    expect(screen.getByTestId('spacing-container')).toHaveStyleRule(
      'margin',
      '0px var(--spacing-four) var(--spacing-one) 0px'
    );
  });
});
