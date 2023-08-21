import React from 'react';

import styled from 'styled-components';

import { ThemeContext, getColorCategory, getTextSizeFromSizeString, getThemeStyling } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiInputProps, privateInputProps } from './types';
import { InputMapper, getDynamicInputMapper, getPadding } from './theme';

const Input = styled.input<privateInputProps>`
  ${(props: privateInputProps) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.$category ? getDynamicInputMapper(getColorCategory(props.$category)) : InputMapper
    )}
    font-size: ${getTextSizeFromSizeString(props.$customTheme, props.$size || 'regular')};

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

    padding: ${getPadding(props.$size || 'regular')};
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
  category,
  type,
  value,
  onChange,
  size,
}: UiInputProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} category={category}>
            {label} &nbsp;
          </UiLabel>
        </div>
      )}
      <WrapperDiv>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name} category={category}>
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
            $category={category}
            type={type}
            value={value}
            $size={size}
          />
          {error && <UiText category={category}>{error}</UiText>}
        </InputDiv>
      </WrapperDiv>
    </>
  );
};

UiInput.displayName = 'UiInput';
