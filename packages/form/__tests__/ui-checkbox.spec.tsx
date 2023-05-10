import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiCheckbox } from '../src';

describe('<UiCheckbox />', () => {
  it('renders fine with label', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" />);

    expect(screen.getByRole('checkbox', { name: 'Select this' })).toBeVisible();
  });

  it('renders fine when disabled', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" disabled />);

    expect(screen.getByRole('checkbox', { name: 'Select this' })).toBeDisabled();
  });

  it('renders fine when using positive theme', () => {
    uiRender(<UiCheckbox name="checkbox" theme="POSITIVE" />);

    expect(screen.getByRole('checkbox')).toBeVisible();
  });

  it('Is checked when clicked', () => {
    uiRender(<UiCheckbox label="Select this" name="checkbox" />);

    expect(screen.getByRole('checkbox', { name: 'Select this' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Select this' })).toBeVisible();

    fireEvent.click(screen.getByRole('checkbox', { name: 'Select this' }));

    expect(screen.getByRole('checkbox', { name: 'Select this' })).toBeChecked();
  });

  it('Executes callback when clicked', () => {
    const onChangeCB = jest.fn();
    uiRender(<UiCheckbox label="Select this" name="checkbox" onChange={onChangeCB} />);

    expect(screen.getByRole('checkbox', { name: 'Select this' })).toBeVisible();

    fireEvent.click(screen.getByRole('checkbox', { name: 'Select this' }));

    expect(onChangeCB).toHaveBeenCalledTimes(1);
  });
});
