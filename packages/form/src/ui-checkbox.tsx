import React from 'react';

import styled from 'styled-components';

import {
  ColorCategories,
  TextSize,
  ThemeContext,
  getColorCategory,
  getTextSize,
  getThemeStyling,
} from '@uireact/foundation';

import { UiCheckboxProps, privateCheckboxLabelProps, privateCheckboxProps } from './types';
import { CheckboxButtonMapper, DisabledCheckboxMapper, getDynamicCheckboxMapper } from './theme';

const Label = styled.label<privateCheckboxLabelProps>`
  ${(props) => `
    font-size: ${getTextSize(props.$customTheme, TextSize.regular)};
  `}

  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const CheckboxInput = styled.input<privateCheckboxProps>`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label .ui-react-checkbox-pill-dot {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  &:checked + label .ui-react-checkbox-pill {
    ${(props) => `
      ${getThemeStyling(
        props.$customTheme,
        props.$selectedTheme,
        getDynamicCheckboxMapper(getColorCategory(props.$category))
      )}
    `}
  }

  &:disabled + label {
    cursor: not-allowed;
  }

  &:disabled + label .ui-react-checkbox-pill {
    ${(props) => `
      ${getThemeStyling(props.$customTheme, props.$selectedTheme, DisabledCheckboxMapper)}
    `}
  }
`;

const CheckboxPillWrapper = styled.span<privateCheckboxProps>`
  width: 50px;
  height: 20px;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.2s;

  ${(props) => `
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, getDynamicCheckboxMapper(ColorCategories.fonts))}
    ${props.$labelPosition === 'START' ? 'left: 5px;' : ''}
  `}
`;

const CheckboxPillDot = styled.span<privateCheckboxProps>`
  content: '';
  position: absolute;
  top: 1px;
  left: 2px;
  width: 20px;
  height: 18px;
  border-radius: 20px;
  transition: 0.2s;
  ${(props) => `
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, CheckboxButtonMapper)}
  `}
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

const LabelSpan = styled.span<privateCheckboxLabelProps>`
  ${(props) => `
    ${props.$labelPosition === 'END' ? 'position: absolute; left: 75px;' : 'position: relative; left: 0px;'}
  `}

  width: max-content;
`;

export const UiCheckbox: React.FC<UiCheckboxProps> = ({
  checked,
  disabled,
  label,
  labelPosition = 'END',
  name,
  ref,
  category,
  onChange,
}: UiCheckboxProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      <CheckboxInput
        checked={checked}
        $customTheme={themeContext.theme}
        disabled={disabled}
        id={name}
        name={name}
        $selectedTheme={themeContext.selectedTheme}
        $category={category}
        type="checkbox"
        ref={ref}
        onChange={onChange}
      />{' '}
      <Label $customTheme={themeContext.theme} htmlFor={name} $selectedTheme={themeContext.selectedTheme}>
        <>
          {labelPosition === 'START' && (
            <LabelSpan
              $customTheme={themeContext.theme}
              $selectedTheme={themeContext.selectedTheme}
              $labelPosition={labelPosition}
            >
              {label}
            </LabelSpan>
          )}
          <CheckboxPillWrapper
            className="ui-react-checkbox-pill"
            $customTheme={themeContext.theme}
            $selectedTheme={themeContext.selectedTheme}
            $labelPosition={labelPosition}
          >
            <CheckboxPillDot
              className="ui-react-checkbox-pill-dot"
              $customTheme={themeContext.theme}
              $selectedTheme={themeContext.selectedTheme}
            />
          </CheckboxPillWrapper>
          {labelPosition === 'END' && (
            <LabelSpan
              $customTheme={themeContext.theme}
              $selectedTheme={themeContext.selectedTheme}
              $labelPosition={labelPosition}
            >
              {label}
            </LabelSpan>
          )}
        </>
      </Label>
    </>
  );
};

UiCheckbox.displayName = 'UiCheckbox';
