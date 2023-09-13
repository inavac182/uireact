import React from 'react';

import styled from 'styled-components';

import {
  SizesProp,
  ThemeContext,
  getColorCategory,
  getTextSizeFromSizeString,
  getThemeStyling,
} from '@uireact/foundation';
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

    padding-top: ${getPadding(props.$size || 'regular')};
    padding-bottom: ${getPadding(props.$size || 'regular')};
    padding-left: ${props.$withIcon ? '30px' : '5px'};
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
  position: relative;
`;

const IconContainer = styled.span<{ $size?: SizesProp }>`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const UiInput: React.FC<UiInputProps> = ({
  className,
  testId,
  disabled,
  error,
  icon,
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
  required,
}: UiInputProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div className={className} data-testid={testId}>
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
          {icon && <IconContainer>{icon}</IconContainer>}
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
            required={required}
            $withIcon={icon !== undefined}
          />
          {error && <UiText category={category}>{error}</UiText>}
        </InputDiv>
      </WrapperDiv>
    </div>
  );
};

UiInput.displayName = 'UiInput';
