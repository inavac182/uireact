import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDigitsInput } from '../src';

describe('<Component />', () => {
  it('renders fine with label', () => {
    uiRender(<UiDigitsInput digits={2} label="Input" name="MyInput" />);

    expect(screen.getByText('Input')).toBeVisible();
    expect(screen.getAllByRole('textbox')[0]).toBeVisible();
    expect(screen.getAllByRole('textbox')[1]).toBeVisible();
  });

  it('renders fine without name', () => {
    uiRender(<UiDigitsInput digits={2} label="Input" />);

    expect(screen.getByText('Input')).toBeVisible();
    expect(screen.getAllByRole('textbox')[0]).toBeVisible();
    expect(screen.getAllByRole('textbox')[1]).toBeVisible();
  });

  it('renders fine with category', () => {
    uiRender(<UiDigitsInput digits={2} label="Input" name="MyInput" category="error" />);

    expect(screen.getByText('Input')).toBeVisible();
    expect(screen.getAllByRole('textbox')[0]).toBeVisible();
    expect(screen.getAllByRole('textbox')[1]).toBeVisible();
  });

  it('renders fine with centered', () => {
    uiRender(<UiDigitsInput digits={2} label="Input" name="MyInput" category="error" centered />);

    expect(screen.getByText('Input')).toBeVisible();
    expect(screen.getAllByRole('textbox')[0]).toBeVisible();
    expect(screen.getAllByRole('textbox')[1]).toBeVisible();
  });

  it('renders fine with error', () => {
    uiRender(<UiDigitsInput digits={2} label="Input" name="MyInput" category="error" error="Some error" />);

    expect(screen.getByText('Input')).toBeVisible();
    expect(screen.getAllByRole('textbox')[0]).toBeVisible();
    expect(screen.getAllByRole('textbox')[1]).toBeVisible();

    expect(screen.getByText('Some error')).toBeVisible();
  });

  it('Executes onChange when digit is typed', () => {
    const onChange = jest.fn();
    const onComplete = jest.fn();

    uiRender(<UiDigitsInput digits={2} label="Input" name="MyInput" onChange={onChange} onComplete={onComplete} />);

    const input = screen.getAllByRole('textbox')[1];

    fireEvent.change(input, { target: { value: '3' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('3');
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('Executes onChange when digit is typed even if onComplete is not present', () => {
    const onChange = jest.fn();

    uiRender(<UiDigitsInput digits={2} label="Input" name="MyInput" onChange={onChange} />);

    const input1 = screen.getAllByRole('textbox')[0];
    const input2 = screen.getAllByRole('textbox')[1];

    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '3' } });

    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('Executes onComplete when all digits are typed', () => {
    const onChange = jest.fn();
    const onComplete = jest.fn();

    uiRender(<UiDigitsInput digits={3} label="Input" name="MyInput" onChange={onChange} onComplete={onComplete} />);

    const input1 = screen.getAllByRole('textbox')[0];
    const input2 = screen.getAllByRole('textbox')[1];
    const input3 = screen.getAllByRole('textbox')[2];

    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '2' } });
    fireEvent.change(input3, { target: { value: '3' } });

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[0][0]).toBe('1');
    expect(onChange.mock.calls[1][0]).toBe('12');
    expect(onChange.mock.calls[2][0]).toBe('123');
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenCalledWith('123');
  });

  it('Executes onComplete when all digits are typed even if onChnage is not provided', () => {
    const onComplete = jest.fn();

    uiRender(<UiDigitsInput digits={3} label="Input" name="MyInput" onComplete={onComplete} />);

    const input1 = screen.getAllByRole('textbox')[0];
    const input2 = screen.getAllByRole('textbox')[1];
    const input3 = screen.getAllByRole('textbox')[2];

    fireEvent.change(input1, { target: { value: '1' } });
    fireEvent.change(input2, { target: { value: '2' } });
    fireEvent.change(input3, { target: { value: '3' } });

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenCalledWith('123');
  });

  it('Should not save if digit lenght is more than 1', () => {
    const onChange = jest.fn();
    const onComplete = jest.fn();

    uiRender(<UiDigitsInput digits={3} label="Input" name="MyInput" onChange={onChange} onComplete={onComplete} />);

    const input = screen.getAllByRole('textbox')[1];

    fireEvent.change(input, { target: { value: '32' } });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('Executes onComplete when value pasted matches digits length', () => {
    const onComplete = jest.fn();

    uiRender(<UiDigitsInput digits={3} label="Input" name="MyInput" onComplete={onComplete} />);

    const input1 = screen.getAllByRole('textbox')[0];

    fireEvent.change(input1, { target: { value: '123' } });

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenCalledWith('123');
  });

  it('Executes onChange when value pasted matches digits length', () => {
    const onChange = jest.fn();

    uiRender(<UiDigitsInput digits={3} label="Input" name="MyInput" onChange={onChange} />);

    const input1 = screen.getAllByRole('textbox')[0];

    fireEvent.change(input1, { target: { value: '123' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('123');
  });
});
