import React from 'react';

import styled from 'styled-components';

import { TextSize, ThemeContext, getColorCategory, getTextSize, getThemeStyling } from '@uireact/foundation';
import { UiText, UiLabel } from '@uireact/text';

import { UiSelectProps, privateSelectProps } from './types';
import { getDynamicSelectMapper, SelectMapper } from './theme';

const Select = styled.select<privateSelectProps>`
  ${(props: privateSelectProps) => `
    ${getThemeStyling(
      props.$customTheme,
      props.$selectedTheme,
      props.category ? getDynamicSelectMapper(getColorCategory(props.category)) : SelectMapper
    )}
    font-size: ${getTextSize(props.$customTheme, TextSize.regular)};
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
  theme,
  value,
  onChange,
}: UiSelectProps) => {
  const themeContext = React.useContext(ThemeContext);

  const handleChange = React.useCallback(
    (e) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} theme={theme}>
            {label}
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
        <SelectDiv>
          <Select
            $customTheme={themeContext.theme}
            disabled={disabled}
            id={name}
            name={name}
            onChange={handleChange}
            ref={ref}
            $selectedTheme={themeContext.selectedTheme}
            category={theme}
            value={value}
          >
            {children}
          </Select>
          {error && <UiText theme={theme}>{error}</UiText>}
        </SelectDiv>
      </WrapperDiv>
    </>
  );
};

UiSelect.displayName = 'UiSelect';
