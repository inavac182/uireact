import React, { useState } from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiRangeInput } from '../src';
import { UiIcon } from '@uireact/icons';
import { BreakpointsSizes } from '@uireact/foundation/src/responsive/breakpoints-sizes';

describe('<Component />', () => {
  beforeEach(() => {
    global.innerWidth = BreakpointsSizes.l.min;
  });

  it('renders fine with label', () => {
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
  });

  it('renders fine with prefix', () => {
    uiRender(<UiRangeInput label="Input" name="MyInput" prefix='$' max={100} min={50} value={70} showRangeLabels onChange={jest.fn()} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('$50')).toBeVisible();
    expect(screen.getByText('$100')).toBeVisible();
    expect(screen.getByText('$70')).toBeVisible();
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

  it('renders fine with text input', () => {
    const onChangeSpy = jest.fn();
    const Component = ({ onChangeSpy }: { onChangeSpy: (name: string, value: number) => void }) => {
      const [value, setValue] = useState<number>(70);

      return (
        <UiRangeInput 
          icon={<UiIcon icon="Add" />} 
          category='primary' 
          label="MyRangeInput" 
          labelOnTop 
          name="MyInput" 
          max={100} 
          min={50} 
          value={value} 
          showRangeLabels 
          onChange={(name, value) => { setValue(value); onChangeSpy(name, value); }} 
          showTextInput
        />
      )
    }

    uiRender(<Component onChangeSpy={onChangeSpy}  />);

    expect(screen.getByRole('slider', { name: 'MyRangeInput' })).toBeVisible();
    expect(screen.getByRole('spinbutton')).toBeVisible();
    expect(screen.getByRole('spinbutton')).toHaveValue(70);

    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: 90 } });

    expect(screen.getByRole('spinbutton')).toHaveValue(90);
    expect(screen.getByRole('slider', { name: 'MyRangeInput' })).toHaveValue("90");

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith("MyInput", 90);
  });

  it('renders fine with text input on small', () => {
    global.innerWidth = BreakpointsSizes.s.max;
    const onChangeSpy = jest.fn();
    const Component = ({ onChangeSpy }: { onChangeSpy: (name: string, value: number) => void }) => {
      const [value, setValue] = useState<number>(70);

      return (
        <UiRangeInput 
          icon={<UiIcon icon="Add" />} 
          category='primary' 
          label="MyRangeInput" 
          labelOnTop 
          name="MyInput" 
          max={100} 
          min={50} 
          value={value} 
          showRangeLabels 
          onChange={(name, value) => { setValue(value); onChangeSpy(name, value); }} 
          showTextInput
        />
      )
    }

    uiRender(<Component onChangeSpy={onChangeSpy}  />);

    expect(screen.getByRole('slider', { name: 'MyRangeInput' })).toBeVisible();
    expect(screen.getByRole('spinbutton')).toBeVisible();
    expect(screen.getByRole('spinbutton')).toHaveValue(70);
  });

  it('gets correct inner and real value when text input is cleaned up', () => {
    const onChangeSpy = jest.fn();
    const Component = ({ onChangeSpy }: { onChangeSpy: (name: string, value: number) => void }) => {
      const [value, setValue] = useState<number>(70);

      return (
        <UiRangeInput 
          icon={<UiIcon icon="Add" />} 
          category='primary' 
          label="MyRangeInput" 
          labelOnTop 
          name="MyInput" 
          max={100} 
          min={50} 
          value={value} 
          showRangeLabels 
          onChange={(name, value) => { setValue(value); onChangeSpy(name, value); }} 
          showTextInput
        />
      )
    }

    uiRender(<Component onChangeSpy={onChangeSpy}  />);

    expect(screen.getByRole('slider', { name: 'MyRangeInput' })).toBeVisible();
    expect(screen.getByRole('spinbutton')).toBeVisible();
    expect(screen.getByRole('spinbutton')).toHaveValue(70);

    expect(screen.getByText('50')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: "" } });

    expect(screen.getByRole('spinbutton')).toHaveValue(0);
    expect(screen.getByRole('slider', { name: 'MyRangeInput' })).toHaveValue("50");

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith("MyInput", 0);
  });

  it('triggerd on change successfully when value is changed', () => {
    const onChangeSpy = jest.fn();
    uiRender(<UiRangeInput label="Input" name="MyInput" max={100} min={50} value={70} onChange={onChangeSpy} />);

    expect(screen.getByRole('slider', { name: 'Input' })).toBeVisible();
    expect(screen.getByText('70')).toBeVisible();
    fireEvent.change(screen.getByRole('slider'), { target: { value: 80 } });

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith("MyInput", 80);
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
