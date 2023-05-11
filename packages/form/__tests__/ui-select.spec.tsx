import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiSelect } from '../src';

describe('<UiSelect />', () => {
  it('renders fine with label', () => {
    uiRender(
      <>
        <UiSelect label="Cars" name="MyInput">
          <option>Ford</option>
          <option>Chevy</option>
        </UiSelect>
      </>
    );

    expect(screen.getByRole('combobox', { name: 'Cars' })).toBeVisible();
  });

  it('renders fine with a state', () => {
    uiRender(
      <>
        <UiSelect label="Cars" labelOnTop state="POSITIVE">
          <option>Ford</option>
          <option>Chevy</option>
        </UiSelect>
      </>
    );

    expect(screen.getByRole('combobox', { name: 'Cars' })).toBeVisible();
  });

  it('renders fine with error', () => {
    uiRender(
      <>
        <UiSelect label="Cars" name="MyInput" error="Some error">
          <option>Ford</option>
          <option>Chevy</option>
        </UiSelect>
      </>
    );

    expect(screen.getByRole('combobox', { name: 'Cars' })).toBeVisible();
    expect(screen.getByText('Some error')).toBeVisible();
  });

  it('executes onChange fb when changes', () => {
    const onChange = jest.fn();

    uiRender(
      <>
        <UiSelect label="Cars" name="MyInput" onChange={onChange}>
          <option>Ford</option>
          <option>Chevy</option>
        </UiSelect>
      </>
    );

    const select = screen.getByRole('combobox', { name: 'Cars' });

    expect(select).toHaveValue('Ford');

    fireEvent.change(select, { target: { value: 'Chevy' } });

    expect(select).toHaveValue('Chevy');

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('Chevy');
  });
});
