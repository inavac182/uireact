import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UiReactFadeUp } from '@uireact/framer-animations';
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
    expect(screen.getByTestId('UiCard')).toHaveClass('card bg-secondary-100 color-fonts-100 padding-three');
  });

  test('render card with category', () => {
    render(
      <UiCard category="positive" testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveClass('card bg-positive-100 color-fonts-100 padding-three');
  });

  test('render card with weight', () => {
    render(
      <UiCard weight="50" testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveClass('card bg-secondary-50 color-fonts-100 padding-three');
  });

  test('render no padded card', () => {
    render(
      <UiCard weight="10" padding={{}} testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  test('render outlined card', () => {
    render(
      <UiCard weight="50" styling="outlined" testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveClass('card cardOutlined border-secondary-100 padding-three');
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
      <UiCard link="https://uireact.io" testId="UiCard">
        <ContentMock />
      </UiCard>
    );

    expect(screen.getByRole('link', { name: 'Content' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveClass('card bg-secondary-100 color-fonts-100 padding-three');
  });

  test('execute card click handler', () => {
    const clickCallback = jest.fn();

    render(
      <UiCard clickHandler={clickCallback} testId="UiCard">
        <HeadingMock />
      </UiCard>
    );

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    expect(screen.getByTestId('UiCard')).toHaveClass('card bg-secondary-100 color-fonts-100 padding-three pointer');

    fireEvent.click(screen.getByRole('heading'));

    expect(clickCallback).toHaveBeenCalledTimes(1);
  });

  test('render card with animation', async () => {
    render(
      <UiCard testId="UiCard" motion={UiReactFadeUp}>
        <HeadingMock />
      </UiCard>
    );

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
    });
  });
});
