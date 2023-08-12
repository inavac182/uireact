import React from 'react';

import { render, screen } from '@testing-library/react';

import { UiNavbar, UiNavbarItem } from '../src';

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

  it('Should render navbar when orientation is inline and stretched', () => {
    render(
      <UiNavbar orientation="inline" stretchItems>
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

  it('Should render navbar when has alignments', () => {
    render(
      <UiNavbar align="start">
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

  it('Should render navbar when roundedCorners is used', () => {
    render(
      <UiNavbar category="secondary" roundedCorners>
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
});
