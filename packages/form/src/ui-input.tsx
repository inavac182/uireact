import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getColorCategory, getTextSize, getThemeStyling } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiInputProps, privateInputProps } from './types';
import { InputMapper, getDynamicInputMapper } from './theme';

const Input = styled.input<privateInputProps>`
  ${(props: privateInputProps) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.category ? getDynamicInputMapper(getColorCategory(props.category)) : InputMapper
    )}
    font-size: ${getTextSize(props.$customTheme, TextSize.regular)};

    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    box-sizing: border-box;

    :focus {
      border-style: solid;
      border-width: 2px;
      border-radius: 2px;
    }

    :disabled {
      cursor: not-allowed;
    }

    padding: 5px;
    outline: none;
    width: 100%;
  `}
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const InputDiv = styled.div`
  display: inline-block;
  flex-grow: 1;
`;

export const UiInput: React.FC<UiInputProps> = ({
  disabled,
  error,
  label,
  labelOnTop,
  name = 'input-name',
  placeholder,
  ref,
  theme,
  type,
  value,
  onChange,
}: UiInputProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} theme={theme}>
            {label} &nbsp;
          </UiLabel>
        </div>
      )}
      <WrapperDiv>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name} theme={theme}>
              {label} &nbsp;
            </UiLabel>
          </div>
        )}
        <InputDiv>
          <Input
            $customTheme={themeContext.theme}
            disabled={disabled}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            $selectedTheme={themeContext.selectedTheme}
            category={theme}
            type={type}
            value={value}
          />
          {error && <UiText theme={theme}>{error}</UiText>}
        </InputDiv>
      </WrapperDiv>
    </>
  );
};

UiInput.displayName = 'UiInput';
