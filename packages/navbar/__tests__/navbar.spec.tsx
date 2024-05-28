import React from 'react';

import { render, screen } from '@testing-library/react';

import { UiNavbar, UiNavbarItem } from '../src';

import 'jest-styled-components';

describe('<UiNavbar />', () => {
  it('Should render navbar', () => {
    render(
      <UiNavbar>
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
  });

  it('Should render navbar with test id', () => {
    render(
      <UiNavbar testId="my-navbar">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByTestId('my-navbar')).toBeVisible();
  });

  it('Should render navbar with class name', () => {
    render(
      <UiNavbar testId="my-navbar" className="some-class">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByTestId('my-navbar')).toBeVisible();
    expect(screen.getByTestId('my-navbar')).toHaveClass('some-class');
  });

  it('Should render navbar when orientation is inline', () => {
    render(
      <UiNavbar orientation="inline">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
  });

  it('Should render navbar when orientation is inline and has gap', () => {
    render(
      <UiNavbar orientation="inline" gap='four'>
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
  });

  it('Should render navbar when norientation is stacked', () => {
    render(
      <UiNavbar orientation="stacked">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
  });

  it('Should render navbar when has rounded appearance', () => {
    render(
      <UiNavbar appearance='rounded'>
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render navbar when category is provided', () => {
    render(
      <UiNavbar category="secondary">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render navbar when appearance with rounded edges is used', () => {
    render(
      <UiNavbar category="secondary" appearance='roundedEdges'>
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem active>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render navbar when an option is active', () => {
    render(
      <UiNavbar category="secondary">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem active>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should NOT break if a non valid element is provided', () => {
    render(
      <UiNavbar category="secondary">
        {`Option 1`}
        <UiNavbarItem active>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render with bordered styling', () => {
    render(
      <UiNavbar category="secondary" styling="bordered">
        {`Option 1`}
        <UiNavbarItem active>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render with bordered styling when is stacked', () => {
    render(
      <UiNavbar category="secondary" styling="bordered" orientation="stacked">
        {`Option 1`}
        <UiNavbarItem active>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render with filled styling', () => {
    render(
      <UiNavbar category="secondary" styling="filled">
        {`Option 1`}
        <UiNavbarItem active>Option 2</UiNavbarItem>
        <UiNavbarItem>Option 3</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByText('Option 3')).toBeVisible();
  });

  it('Should render with stretched items', () => {
    render(
      <UiNavbar stretch>
        <UiNavbarItem active>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
  });

  it('Should render with no background', () => {
    render(
      <UiNavbar noBackground>
        <UiNavbarItem active>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
  });

  it('Should render navbar with gap', () => {
    render(
      <UiNavbar gap="five" testId="UiNavbar">
        <UiNavbarItem>Option 1</UiNavbarItem>
        <UiNavbarItem>Option 2</UiNavbarItem>
      </UiNavbar>
    );

    expect(screen.getByText('Option 1')).toBeVisible();
    expect(screen.getByText('Option 2')).toBeVisible();
    expect(screen.getByTestId('UiNavbar')).toHaveStyleRule('gap', 'var(--spacing-five)');
  });
});
