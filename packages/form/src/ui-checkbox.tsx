import React from 'react';

import styled from 'styled-components';

import { ColorCategories, TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';

import { UiCheckboxProps, privateCheckboxProps } from './types';
import {
  CheckboxButtonMapper,
  DisabledCheckboxMapper,
  getColorCategoryFromState,
  getDynamicCheckboxMapper,
} from './theme';

const Label = styled.label<privateCheckboxProps>`
  ${(props) => `
    font-size: ${getTextSize(props.customTheme, TextSize.regular)};
  `}

  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const CheckboxInput = styled.input<privateCheckboxProps>`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + label .ui-react-checkbox-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  :checked + label .ui-react-checkbox-button-wrapper {
    ${(props) => `
      ${getThemeStyling(
        props.customTheme,
        props.selectedTheme,
        getDynamicCheckboxMapper(getColorCategoryFromState(props.theme))
      )}
    `}
  }

  :disabled + label {
    cursor: not-allowed;
  }

  :disabled + label > .ui-react-checkbox-button-wrapper {
    ${(props) => `
      ${getThemeStyling(props.customTheme, props.selectedTheme, DisabledCheckboxMapper)}
    `}
  }
`;

const CheckboxButtonWrapper = styled.span<privateCheckboxProps>`
  width: 50px;
  height: 20px;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.2s;

  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, getDynamicCheckboxMapper(ColorCategories.fonts))}
    ${props.labelPosition === 'START' ? 'left: 5px;' : ''}
  `}
`;

const CheckboxButtonSpan = styled.span<privateCheckboxProps>`
  content: '';
  position: absolute;
  top: 1px;
  left: 2px;
  width: 20px;
  height: 18px;
  border-radius: 20px;
  transition: 0.2s;
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, CheckboxButtonMapper)}
  `}
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

const LabelSpan = styled.span<privateCheckboxProps>`
  ${(props) => `
    ${props.labelPosition === 'END' ? 'position: absolute; left: 75px;' : 'position: relative; left: 0px;'}
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
  theme,
  onChange,
}: UiCheckboxProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      <CheckboxInput
        checked={checked}
        customTheme={themeContext.theme}
        disabled={disabled}
        id={name}
        name={name}
        selectedTheme={themeContext.selectedTheme}
        theme={theme}
        type="checkbox"
        ref={ref}
        onChange={onChange}
      />{' '}
      <Label
        customTheme={themeContext.theme}
        disabled={disabled}
        htmlFor={name}
        selectedTheme={themeContext.selectedTheme}
      >
        <>
          {labelPosition === 'START' && (
            <LabelSpan
              customTheme={themeContext.theme}
              selectedTheme={themeContext.selectedTheme}
              labelPosition={labelPosition}
            >
              {label}
            </LabelSpan>
          )}
          <CheckboxButtonWrapper
            className="ui-react-checkbox-button-wrapper"
            customTheme={themeContext.theme}
            selectedTheme={themeContext.selectedTheme}
            labelPosition={labelPosition}
          >
            <CheckboxButtonSpan
              className="ui-react-checkbox-button"
              customTheme={themeContext.theme}
              selectedTheme={themeContext.selectedTheme}
            />
          </CheckboxButtonWrapper>
          {labelPosition === 'END' && (
            <LabelSpan
              customTheme={themeContext.theme}
              selectedTheme={themeContext.selectedTheme}
              labelPosition={labelPosition}
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
