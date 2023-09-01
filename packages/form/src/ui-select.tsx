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
      props.$category ? getDynamicSelectMapper(getColorCategory(props.$category)) : SelectMapper
    )}
    font-size: ${getTextSize(props.$customTheme, TextSize.regular)};
  `}

  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  :disabled {
    cursor: not-allowed;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const SelectDiv = styled.div`
  display: inline-block;
  flex-grow: 1;
`;

export const UiSelect: React.FC<UiSelectProps> = ({
  children,
  disabled,
  error,
  label,
  labelOnTop,
  name = 'select-name',
  ref,
  category,
  value,
  onChange,
  required,
}: UiSelectProps) => {
  const themeContext = React.useContext(ThemeContext);

  const handleChange = React.useCallback(
    (e) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div>
      {label && labelOnTop && (
        <div>
          <UiLabel htmlFor={name} category={category}>
            {label}
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
        <SelectDiv>
          <Select
            $customTheme={themeContext.theme}
            disabled={disabled}
            id={name}
            name={name}
            onChange={handleChange}
            ref={ref}
            $selectedTheme={themeContext.selectedTheme}
            $category={category}
            value={value}
            required={required}
          >
            {children}
          </Select>
          {error && <UiText category={category}>{error}</UiText>}
        </SelectDiv>
      </WrapperDiv>
    </div>
  );
};

UiSelect.displayName = 'UiSelect';
