import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiTextArea } from '../src';

describe('<UiTextArea />', () => {
  it('renders fine', () => {
    uiRender(<UiTextArea name="text-area" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine without name', () => {
    uiRender(<UiTextArea />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine with label', () => {
    uiRender(<UiTextArea name="text-area" label="Description" />);

    expect(screen.getByRole('textbox', { name: 'Description' })).toBeVisible();
  });

  it('renders fine with error', () => {
    uiRender(<UiTextArea name="text-area" label="Description" error="Type something" />);

    expect(screen.getByRole('textbox', { name: 'Description' })).toBeVisible();
    expect(screen.getByText('Type something')).toBeVisible();
  });

  it('renders fine with label on the top', () => {
    uiRender(<UiTextArea name="text-area" label="Description" labelOnTop />);

    expect(screen.getByRole('textbox', { name: 'Description' })).toBeVisible();
  });

  it('renders fine with state', () => {
    uiRender(<UiTextArea name="text-area" theme="positive" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders fine when resize is false', () => {
    uiRender(<UiTextArea name="text-area" resize={false} />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('triggers onChange correctly', () => {
    const onChange = jest.fn();

    uiRender(<UiTextArea name="text-area" resize={false} onChange={onChange} />);
    const checkbox = screen.getByRole('textbox');

    expect(checkbox).toBeVisible();

    fireEvent.change(checkbox, { target: { value: 'Some value' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('Some value');
  });
});
