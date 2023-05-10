import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiTextAreaProps, privateTextAreaProps } from './types';
import { TextareaMapper, getColorCategoryFromState, getDynamicTextareaMapper } from './theme';

const Textarea = styled.textarea<privateTextAreaProps>`
  ${(props: privateTextAreaProps) => `
    ${getThemeStyling(
      props.customTheme,
      props.selectedTheme,
      props.state ? getDynamicTextareaMapper(getColorCategoryFromState(props.state)) : TextareaMapper
    )}
    font-size: ${getTextSize(props.customTheme, TextSize.regular)};
    ${props.resize === false ? 'resize: none;' : ''}
  `}

  border-style: solid;
  border-width: 2px;
  border-radius: 2px;

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
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const InputDiv = styled.div`
  display: inline-block;
`;

export const UiTextArea: React.FC<UiTextAreaProps> = ({
  cols,
  disabled,
  error,
  label,
  labelOnTop,
  maxlength,
  name = 'textarea-name',
  placeholder,
  resize,
  ref,
  rows,
  state,
  value,
  onChange,
}: UiTextAreaProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name}>{label}</UiLabel>
        </div>
      )}
      <WrapperDiv>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name}>{label} &nbsp;</UiLabel>
          </div>
        )}
        <InputDiv>
          <Textarea
            customTheme={themeContext.theme}
            cols={cols}
            disabled={disabled}
            id={name}
            maxlength={maxlength}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            resize={resize}
            rows={rows}
            selectedTheme={themeContext.selectedTheme}
            state={state}
            value={value}
          />
          {error && <UiText state={state}>{error}</UiText>}
        </InputDiv>
      </WrapperDiv>
    </>
  );
};

UiTextArea.displayName = 'UiTextArea';
