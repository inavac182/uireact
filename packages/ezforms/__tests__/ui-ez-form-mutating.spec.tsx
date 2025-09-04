import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { UiValidator } from '@uireact/validator';

import { uiRender } from '../../../__tests__/utils';
import { UiEzForm } from '../src';


const validator = new UiValidator();

const schema = {
  country: validator
    .field('choice')
    .ezMetadata({ label: "Country", icon: "EarthAmericas" })
    .present("Country is required")
    .oneOf([{ label: 'Mexico', value: '1' }, { label: 'Estados Unidos de America', value: '2' }]),
  state: validator
    .field('choice')
    .ezMetadata({ label: "State", icon: "City" })
    .when('country', validator.is().equals('1'))
    .run(validator.is().present("State is required").oneOf(['Colima', 'Jalisco']))
    .else(validator.is().mutate('text').present("State is required"))
}

describe('Mutating fields', () => {
  it('Should render combobox field as no data is present and choice is the main rule', () => {
    uiRender(<UiEzForm schema={schema} submitLabel='Submit' />);

    expect(screen.getByRole('combobox', { name: 'Country' })).toBeVisible();
    expect(screen.getByRole('combobox', { name: 'State' })).toBeVisible();
  });

  it('Should mutate correctly between different types', () => {
    uiRender(<UiEzForm schema={schema} submitLabel='Submit' />);

    // Verify first render
    const countrySelect = screen.getByRole('combobox', { name: 'Country' });
    const stateSelect = screen.getByRole('combobox', { name: 'State' });

    // Add some value and verify the text element
    fireEvent.change(stateSelect, { target: { value: 'Colima' } });

    expect(countrySelect).toBeVisible();

    expect(screen.getByRole('combobox', { name: 'State' })).toBeVisible();
    expect(screen.getByRole('combobox', { name: 'State' })).toHaveValue('Colima');

    // Change country to the value that triggers mutation

    fireEvent.change(countrySelect, { target: { value: '2' } });

    // Verify mutated field renders
    expect(screen.queryByRole('combobox', { name: 'State' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'State' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'State' })).toHaveValue('');
  
  });
});
