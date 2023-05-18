import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { UiCard } from '../src';
import { ColorTokens } from '@uireact/foundation';

const HeadingMock = () => <h1>Heading</h1>;
const ContentMock = () => <p>Content</p>;
const FooterMock = () => <span>Footer</span>;

describe('UiCard', () => {
  test('render card', () => {
    render(
      <UiCard>
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    fireEvent.click(screen.getByRole('heading'));
  });

  test('render card with theme', () => {
    render(
      <UiCard theme="positive">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    fireEvent.click(screen.getByRole('heading'));
  });

  test('render card with weigth', () => {
    render(
      <UiCard weight={ColorTokens.token_100}>
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  test('render squared card', () => {
    render(
      <UiCard weight={ColorTokens.token_10} squared>
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  test('render no padded card', () => {
    render(
      <UiCard weight={ColorTokens.token_10} noPadding>
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  test('render bordered card', () => {
    render(
      <UiCard weight={ColorTokens.token_50} bordered>
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  test('renders card with header, content and footer', () => {
    render(
      <UiCard>
        <HeadingMock />
        <ContentMock />
        <FooterMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
    expect(screen.getByText('Footer')).toBeVisible();
  });

  test('renders card with children', () => {
    render(<UiCard>Children</UiCard>);

    expect(screen.getByText('Children')).toBeVisible();
  });

  test('renders card with link', () => {
    render(
      <UiCard link="https://uireact.io">
        <ContentMock />
      </UiCard>
    );

    expect(screen.getByRole('link', { name: 'Content' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Content' })).toHaveAttribute('href', 'https://uireact.io');
  });

  test('execute card click handler', () => {
    const clickCallback = jest.fn();

    render(
      <UiCard clickHandler={clickCallback}>
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();

    fireEvent.click(screen.getByRole('heading'));

    expect(clickCallback).toHaveBeenCalledTimes(1);
  });

  test('execute internal link', () => {
    render(
      <Router>
        <UiCard link="/link" internalLink>
          <HeadingMock />
        </UiCard>
      </Router>
    );

    expect(screen.getByRole('link')).toBeVisible();
  });
});
