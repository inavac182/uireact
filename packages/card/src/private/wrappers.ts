import styled from 'styled-components';

import { UiReactPrivateElementProps, getThemeToken, MapperLevel, MapperStyleProperty } from '@uireact/foundation';
import { UiCardProps } from '..';
import { CardThemeMapper } from '../theme';

type __CardProps = UiCardProps &
  UiReactPrivateElementProps & {
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    color: ${getThemeToken(MapperLevel.default, MapperStyleProperty.color, props.customTheme, CardThemeMapper)};
    background-color: ${getThemeToken(
      MapperLevel.default,
      MapperStyleProperty.background,
      props.customTheme,
      CardThemeMapper
    )};

    border: 1px solid ${getThemeToken(
      MapperLevel.default,
      MapperStyleProperty.border,
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
