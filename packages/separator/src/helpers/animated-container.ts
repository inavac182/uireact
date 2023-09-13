import styled from 'styled-components';

import { getThemeColor, ColorCategories, ColorTokens, UiReactPrivateElementProps } from '@uireact/foundation';

import { animateGradient, reverseAnimationGradient } from './gradient-animation';

type AnimatedContainerProps = {
  $delay?: number;
  $inverse?: boolean;
} & UiReactPrivateElementProps;

export const AnimatedContainer = styled.div<AnimatedContainerProps>`
  width: 100%;
  height: 1px;

  ${(props) => `
  background: linear-gradient(-45deg,
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.primary, ColorTokens.token_100)}, 
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.secondary, ColorTokens.token_100)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.tertiary, ColorTokens.token_100)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.primary, ColorTokens.token_10)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.secondary, ColorTokens.token_10)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.tertiary, ColorTokens.token_10)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.primary, ColorTokens.token_200)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.secondary, ColorTokens.token_200)},
    ${getThemeColor(props.$customTheme, props.$selectedTheme, ColorCategories.tertiary, ColorTokens.token_200)});
  `}

  animation:  ${(props) => (props.$inverse ? reverseAnimationGradient : animateGradient)} 30s ease infinite;
  animation-delay: ${(props) => (props.$delay ? props.$delay : '0')}ms;
  background-size: 400% 400%;
`;
