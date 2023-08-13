import React from 'react';
import { MemoryRouter } from 'react-router-dom';

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

  it('renders fine when fontStyle is italic', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="italic">
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is bold', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="bold">
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is regular', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="regular">
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine when fontStyle is light', () => {
    uiRender(
      <UiLink href="#" size={TextSize.large} fontStyle="light">
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with category', () => {
    uiRender(
      <UiLink href="#" theme="positive">
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
  });

  it('renders fine with fullWidth', () => {
    uiRender(
      <UiLink href="#" theme="positive" fullWidth>
        Link
      </UiLink>
    );

    expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Link' })).toHaveStyleRule('width', '100%');
    expect(screen.getByRole('link', { name: 'Link' })).toHaveStyleRule('display', 'inline-block');
  });

  it('trigger onClick when clicked', () => {
    uiRender(
      <UiLink handleClick={onClick} theme="positive">
        Link
      </UiLink>
    );

    fireEvent.click(screen.getByRole('link', { name: 'Link' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe('useReactLink', () => {
    it('renders fine when uses internal link', () => {
      uiRender(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <MemoryRouter initialEntries={['/']}>
          <UiLink href="#" useReactLink theme="positive">
            Link
          </UiLink>
        </MemoryRouter>
      );

      expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    });

    it('renders fine when fontStyle is italic', () => {
      uiRender(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <MemoryRouter initialEntries={['/']}>
          <UiLink href="#" size={TextSize.large} fontStyle="italic" useReactLink>
            Link
          </UiLink>
        </MemoryRouter>
      );

      expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    });

    it('renders fine when fontStyle is bold', () => {
      uiRender(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        <MemoryRouter initialEntries={['/']}>
          <UiLink href="#" size={TextSize.large} fontStyle="bold" useReactLink>
            Link
          </UiLink>
        </MemoryRouter>
      );

      expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    });

    it('renders fine when uses internal link but doesnt provide href', () => {
      uiRender(
        <UiLink useReactLink theme="positive">
          Link
        </UiLink>
      );

      expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
    });

    it('renders fine with wrap', () => {
      uiRender(
        <UiLink theme="positive" wrap>
          Link
        </UiLink>
      );

      expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
      expect(screen.getByRole('link', { name: 'Link' })).toHaveStyleRule('text-overflow', 'ellipsis');
      expect(screen.getByRole('link', { name: 'Link' })).toHaveStyleRule('white-space', 'nowrap');
      expect(screen.getByRole('link', { name: 'Link' })).toHaveStyleRule('overflow', 'hidden!important');
    });

    it('renders fine with className', () => {
      uiRender(
        <UiLink href="#" theme="positive" className="something">
          Link
        </UiLink>
      );

      expect(screen.getByRole('link', { name: 'Link' })).toBeVisible();
      expect(screen.getByRole('link', { name: 'Link' })).toHaveClass('something');
    });
  });
});
