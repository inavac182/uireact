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
  it('Should render text field', () => {
    uiRender(<UiEzForm schema={schema} submitLabel='Submit' />);

    expect(screen.getByRole('combobox', { name: 'Country' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'State' })).toBeVisible();
  });

  it('Should mutate correctly between different types', () => {
    uiRender(<UiEzForm schema={schema} submitLabel='Submit' />);

    // Verify first render
    const countrySelect = screen.getByRole('combobox', { name: 'Country' });
    const stateInput = screen.getByRole('textbox', { name: 'State' });

    // Add some value and verify the text element
    fireEvent.change(stateInput, { target: { value: 'Washington' } });

    expect(countrySelect).toBeVisible();

    expect(screen.getByRole('textbox', { name: 'State' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'State' })).toHaveValue('Washington');

    // Change country to the value that triggers mutation

    fireEvent.change(countrySelect, { target: { value: '1' } });

    // Verify mutated field

    expect(screen.queryByRole('textbox', { name: 'State' })).not.toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'State' })).toBeVisible();
    expect(screen.getByRole('combobox', { name: 'State' })).toHaveValue('');

    // Select an option in the mutated field

    const stateSelect = screen.getByRole('combobox', { name: 'State' });
    fireEvent.change(stateSelect, { target: { value: 'Colima' } });

    expect(stateSelect).toHaveValue('Colima');

    // Change country to another value that triggers basic type to be rendered

    fireEvent.change(countrySelect, { target: { value: '2' } });

    // Verify default field renders
    expect(screen.queryByRole('combobox', { name: 'State' })).not.toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'State' })).toBeVisible();
    expect(screen.getByRole('textbox', { name: 'State' })).toHaveValue('');
  });
});
