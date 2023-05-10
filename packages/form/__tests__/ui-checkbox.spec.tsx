import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiCheckbox } from '../src';

describe('<UiCheckbox />', () => {
  it('renders fine with label', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { hidden: true })).not.toBeVisible();
    expect(screen.getByText('Select this')).toBeVisible();
  });

  it('renders fine with label is at start', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" labelPosition="START" />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
    expect(screen.getByText('Select this')).toBeVisible();
  });

  it('renders fine when disabled', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" disabled />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
  });

  it('renders fine when using positive theme', () => {
    uiRender(<UiCheckbox name="checkbox" theme="POSITIVE" />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
  });

  it('Is checked when label is clicked', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" />);

    expect(screen.getByRole('checkbox', { hidden: true })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();

    fireEvent.click(screen.getByText('Select this'));

    expect(screen.getByRole('checkbox', { hidden: true })).toBeChecked();
  });

  it('Executes callback when clicked', () => {
    const onChangeCB = jest.fn();
    uiRender(<UiCheckbox label="Select this" name="checkbox" onChange={onChangeCB} />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();

    fireEvent.click(screen.getByText('Select this'));

    expect(onChangeCB).toHaveBeenCalledTimes(1);
  });
});
