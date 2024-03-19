import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { UiCard } from '../src';

const HeadingMock = () => <h1>Heading</h1>;
const ContentMock = () => <p>Content</p>;
const FooterMock = () => <span>Footer</span>;

describe('UiCard', () => {
  test('render card', () => {
    render(
      <UiCard testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('background-color', 'var(--secondary-token_100)');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('border-color', undefined);
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('color', 'var(--fonts-token_100)');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('padding', '5px');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('border-radius', '3px');
  });

  test('render card with full width and full height', () => {
    render(
      <UiCard fullHeight fullWidth testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('width', '100%');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('height', '100%');
  });

  test('render card with category', () => {
    render(
      <UiCard category="positive" testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('background-color', 'var(--positive-token_100)');
  });

  test('render card with weight', () => {
    render(
      <UiCard weight="50" testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('background-color', 'var(--secondary-token_50)');
  });

  test('render squared card', () => {
    render(
      <UiCard weight="10" squared testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('border-radius', undefined);
  });

  test('render no padded card', () => {
    render(
      <UiCard weight="10" noPadding testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('padding', undefined);
  });

  test('render outlined card', () => {
    render(
      <UiCard weight="50" styling="outlined" testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('background-color', undefined);
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('border-color', 'var(--secondary-token_50)');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('color', 'var(--secondary-token_100)');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('border-width', '3px');
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('border-style', 'solid');
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
      <UiCard clickHandler={clickCallback} testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveStyleRule('cursor', 'pointer');

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
