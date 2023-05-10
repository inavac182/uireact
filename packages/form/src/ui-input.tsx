import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';
import { UiText } from '@uireact/text';

import { UiInputProps, privateInputProps } from './types';
import { InputMapper, getColorCategoryFromState, getDynamicInputMapper } from './theme';

const Input = styled.input<privateInputProps>`
  ${(props) => `
    ${getThemeStyling(
      props.customTheme,
      props.selectedTheme,
      props.state ? getDynamicInputMapper(getColorCategoryFromState(props.state)) : InputMapper
    )}
    font-size: ${getTextSize(props.customTheme, TextSize.regular)};

    border-style: solid;
    border-width: 2px;
    border-radius: 2px;

    :focus {
      border-style: solid;
      border-width: 2px;
      border-radius: 2px;
    }

    padding: 5px;
    outline: none;
  `}
`;

const WrapperDiv = styled.div`
  display: flex;
`;
const LabelDiv = styled.div``;

const InputDiv = styled.div`
  display: inline-block;
`;

const Label = styled.label<privateInputProps>`
  ${(props) => `
    font-size: ${getTextSize(props.customTheme, TextSize.small)};
  `}
`;

export const UiInput: React.FC<UiInputProps> = ({
  error,
  label,
  labelOnTop,
  name = 'input-name',
  placeholder,
  ref,
  state,
  type,
  value,
  onChange,
}: UiInputProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      {label && labelOnTop && (
        <LabelDiv>
          <Label customTheme={theme.theme} selectedTheme={theme.selectedTheme} htmlFor={name}>
            {label} &nbsp;
          </Label>
        </LabelDiv>
      )}
      <WrapperDiv>
        {label && !labelOnTop && (
          <LabelDiv>
            <Label customTheme={theme.theme} selectedTheme={theme.selectedTheme} htmlFor={name}>
              {label} &nbsp;
            </Label>
          </LabelDiv>
        )}
        <InputDiv>
          <Input
            ref={ref}
            customTheme={theme.theme}
            selectedTheme={theme.selectedTheme}
            placeholder={placeholder}
            onChange={onChange}
            id={name}
            name={name}
            state={state}
            type={type}
            value={value}
          />
          {error && <UiText state={state}>{error}</UiText>}
        </InputDiv>
      </WrapperDiv>
    </>
  );
};

UiInput.displayName = 'UiInput';
