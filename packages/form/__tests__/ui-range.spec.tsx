import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiRangeInput } from '../src';
import { UiIcon } from '@uireact/icons';

describe('<Component />', () => {
  it('renders fine with label', () => {
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });

  it('renders fine without value', () => {
    //@ts-ignore
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getAllByText('50')[0]).toBeVisible();
    expect(screen.getAllByText('50')[1]).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
  });

  it('renders fine with error', () => {
    uiRender(<UiRangeInput label="Input" error='Some error' name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
    expect(screen.getByText('Some error')).toBeVisible();
  });

  it('renders fine with label on top', () => {
    uiRender(<UiRangeInput label="Input" labelOnTop name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });

  it('renders fine with category', () => {
    uiRender(<UiRangeInput category='error' label="Input" labelOnTop name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });

  it('renders fine with icon', () => {
    uiRender(<UiRangeInput icon={<UiIcon icon="Add" />} category='primary' label="Input" labelOnTop name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });

  it('triggerd on change successfully when value is changed', () => {
    const onChangeSpy = jest.fn();
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} value={70} onChange={onChangeSpy} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
    fireEvent.change(screen.getByRole('slider'), { target: { value: 80 } });

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('renders fine with label, step and value is selectable', () => {
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} step={10} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });

  it('renders fine with label, step and value is NOT selectable', () => {
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} value={60} showRangeLabels onChange={jest.fn()} step={20} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });
});
