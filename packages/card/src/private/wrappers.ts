import styled from 'styled-components';

import { UiReactPrivateElementProps, getThemeToken, ThemeMapperLevel, ThemeStyleProperty } from '@uireact/foundation';
import { UiCardProps } from '..';
import { CardThemeMapper } from '../theme';

type __CardProps = UiCardProps &
  UiReactPrivateElementProps & {
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    color: ${getThemeToken(ThemeMapperLevel.base, ThemeStyleProperty.color, props.customTheme, CardThemeMapper)};
    background-color: ${getThemeToken(
      ThemeMapperLevel.base,
      ThemeStyleProperty.background,
      props.customTheme,
      CardThemeMapper
    )};

    border: 1px solid ${getThemeToken(
      ThemeMapperLevel.base,
      ThemeStyleProperty.border,
      props.customTheme,
      CardThemeMapper
    )};
    ${props.cursorNeeded ? 'cursor: pointer;' : ''}
  `}

  border-radius: 3px;
`;

export const ContentWrapper = styled.div<__CardProps>`
  ${(props) => `
    ${props.padded ? 'padding: 5px;' : ''}
  `};
`;
