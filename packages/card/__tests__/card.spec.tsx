import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { UiCard } from '../src';

const HeadingMock = () => <h1>Heading</h1>;
const ContentMock = () => <p>Content</p>;
const FooterMock = () => <span>Footer</span>;

test('renders card', () => {
  render(<UiCard header={<HeadingMock />} />);

  expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
});

test('renders card with header, content and footer', () => {
  render(<UiCard header={<HeadingMock />} content={<ContentMock />} footer={<FooterMock />} />);

  expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  expect(screen.getByText('Content')).toBeVisible();
  expect(screen.getByText('Footer')).toBeVisible();
});

test('renders card with children', () => {
  render(<UiCard>Children</UiCard>);

  expect(screen.getByText('Children')).toBeVisible();
});

test('renders card with link', () => {
  render(<UiCard link="https://uireact.io" content={<ContentMock />} />);

  expect(screen.getByRole('link', { name: 'Content' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'Content' })).toHaveAttribute('href', 'https://uireact.io');
});

test('renders card with image', () => {
  render(<UiCard image="https://uireact.io/dummy-image.jpg" content={<ContentMock />} />);

  expect(screen.getByTestId('image-wrapper')).toBeVisible();
});
