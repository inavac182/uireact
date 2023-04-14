import styled from 'styled-components';

import { ColorCategories, ColorTokens, UiReactPrivateElementProps, getThemeColor } from '@uireact/foundation';
import { UiCardProps } from '..';

type __CardProps = UiCardProps &
  UiReactPrivateElementProps & {
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    color: ${getThemeColor(props.customTheme, props.selectedTheme, ColorCategories.fonts, ColorTokens.token_100)};
    background-color: ${getThemeColor(
      props.customTheme,
      props.selectedTheme,
      ColorCategories.backgrounds,
      ColorTokens.token_100
    )};

    border: 1px solid ${getThemeColor(
      props.customTheme,
      props.selectedTheme,
      ColorCategories.backgrounds,
      ColorTokens.token_100
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
