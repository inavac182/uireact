'use client';
import React from 'react';

import { styled } from 'styled-components';

import { getColorCategory } from '@uireact/foundation';

import { UiSwitchProps, privateSwitchLabelProps, privateSwitchProps } from './types';

const Label = styled.label<privateSwitchLabelProps>`
  font-size: var(--texts-regular);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const CheckboxInput = styled.input<privateSwitchProps>`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label .ui-react-checkbox-pill-dot {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  &:checked + label .ui-react-checkbox-pill {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category ?? 'tertiary')}-token_100);
    `}
  }

  &:disabled + label {
    cursor: not-allowed;
  }

  &:disabled + label .ui-react-checkbox-pill {
    ${(props) => `
      background-color: var(--${getColorCategory(props.$category ?? 'primary')}-token_150);
    `}
  }
`;

const CheckboxPillWrapper = styled.span<privateSwitchProps>`
  width: 50px;
  height: 20px;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.2s;

  ${(props) => `
    background-color: var(--fonts-token_10);
    ${props.$labelPosition === 'START' ? 'left: 5px;' : ''}
  `}
`;

const CheckboxPillDot = styled.span<privateSwitchProps>`
  content: '';
  position: absolute;
  top: 1px;
  left: 2px;
  width: 20px;
  height: 18px;
  border-radius: 20px;
  transition: 0.2s;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  background-color: var(--inverse-fonts-token_100);
`;

const LabelSpan = styled.span<privateSwitchLabelProps>`
  ${(props) => `
    ${props.$labelPosition === 'END' ? 'padding-left: 10px;' : ''}
  `}
`;

const Div = styled.div`
  position: relative;
  display: flex;
`;

export const UiSwitch: React.FC<UiSwitchProps> = ({
  checked,
  disabled,
  label,
  className,
  testId,
  labelPosition = 'END',
  name,
  ref,
  category,
  onChange,
}: UiSwitchProps) => (
  <Div className={className} data-testid={testId}>
    <CheckboxInput
      checked={checked}
      disabled={disabled}
      id={name}
      name={name}
      $category={category}
      type="checkbox"
      ref={ref}
      onChange={onChange}
    />{' '}
    <Label htmlFor={name}>
      <>
        {labelPosition === 'START' && <LabelSpan $labelPosition={labelPosition}>{label}</LabelSpan>}
        <CheckboxPillWrapper className="ui-react-checkbox-pill" $labelPosition={labelPosition}>
          <CheckboxPillDot className="ui-react-checkbox-pill-dot" />
        </CheckboxPillWrapper>
        {labelPosition === 'END' && <LabelSpan $labelPosition={labelPosition}>{label}</LabelSpan>}
      </>
    </Label>
  </Div>
);

UiSwitch.displayName = 'UiSwitch';
