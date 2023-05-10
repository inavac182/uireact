import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize } from '@uireact/foundation';

import { UiCheckboxProps, privateCheckboxProps } from './types';

const Label = styled.label<privateCheckboxProps>`
  ${(props) => `
    font-size: ${getTextSize(props.customTheme, TextSize.regular)};
  `}

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;

  :active + span {
    width: 60px;
  }
`;

const CheckboxInput = styled.input<privateCheckboxProps>`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const Span = styled.span<privateCheckboxProps>`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export const UiCheckbox: React.FC<UiCheckboxProps> = ({ checked, name, onChange }: UiCheckboxProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <CheckboxInput
        checked={checked}
        customTheme={theme.theme}
        id={name}
        name={name}
        selectedTheme={theme.selectedTheme}
        type="checkbox"
        onChange={onChange}
      />{' '}
      <Label customTheme={theme.theme} htmlFor={name} selectedTheme={theme.selectedTheme}>
        <Span customTheme={theme.theme} selectedTheme={theme.selectedTheme} />
      </Label>
    </>
  );
};

UiCheckbox.displayName = 'UiCheckbox';
