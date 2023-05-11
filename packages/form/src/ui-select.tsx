import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getTextSize, getThemeStyling } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiSelectProps, privateSelectProps } from './types';
import { getColorCategoryFromState, getDynamicSelectMapper, SelectMapper } from './theme';

const Select = styled.select<privateSelectProps>`
  ${(props: privateSelectProps) => `
    ${getThemeStyling(
      props.customTheme,
      props.selectedTheme,
      props.state ? getDynamicSelectMapper(getColorCategoryFromState(props.state)) : SelectMapper
    )}
    font-size: ${getTextSize(props.customTheme, TextSize.regular)};
  `}

  border-style: solid;
  border-width: 2px;
  border-radius: 5px;

  padding: 5px 10px 5px 10px;
  outline: none;

  :disabled {
    cursor: not-allowed;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const SelectDiv = styled.div`
  display: inline-block;
`;

export const UiSelect: React.FC<UiSelectProps> = ({
  children,
  disabled,
  error,
  label,
  labelOnTop,
  name = 'select-name',
  ref,
  state,
  value,
  onChange,
}: UiSelectProps) => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} state={state}>
            {label}
          </UiLabel>
        </div>
      )}
      <WrapperDiv>
        {label && !labelOnTop && (
          <div>
            <UiLabel htmlFor={name} state={state}>
              {label} &nbsp;
            </UiLabel>
          </div>
        )}
        <SelectDiv>
          <Select
            customTheme={themeContext.theme}
            disabled={disabled}
            id={name}
            name={name}
            onChange={onChange}
            ref={ref}
            selectedTheme={themeContext.selectedTheme}
            state={state}
            value={value}
          >
            {children}
          </Select>
          {error && <UiText state={state}>{error}</UiText>}
        </SelectDiv>
      </WrapperDiv>
    </>
  );
};

UiSelect.displayName = 'UiSelect';
