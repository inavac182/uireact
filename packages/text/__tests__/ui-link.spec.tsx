import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiLink } from '../src';

import { TextSize } from '@uireact/foundation';

const onClick = jest.fn();

describe('<UiLink />', () => {
  afterEach(() => {
    onClick.mockClear();
  });

  it('renders fine', () => {
    uiRender(<UiLink href="#">Link</UiLink>);

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with size', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large}>
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with category', () => {
    uiRender(
      <UiLink href="#" category="POSITIVE">
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('trigger onClick when clicked', () => {
    uiRender(
      <UiLink handleClick={onClick} category="POSITIVE">
        Link
      </UiLink>
    );

    fireEvent.click(screen.getByRole('link', { name: 'Link' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
