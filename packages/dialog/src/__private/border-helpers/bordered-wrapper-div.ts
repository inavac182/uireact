import styled from 'styled-components';

import { ThemeColor, getThemeColor, ColorCategories, ColorTokens } from '@uireact/foundation';

import { privateUiDialogProps } from '../../types';
import { animateGradient } from './animation';
import { getBorderRadius } from './border-radius';
import { getPadding } from './padding';

export const BorderedWrappedDiv = styled.div<privateUiDialogProps>`
  border-radius: ${(props) => getBorderRadius(props.$type)};
  padding: ${(props) => `${props.$selectedTheme === ThemeColor.dark ? getPadding(props.$type) : '0'}`};
  height: 100%;

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
  animation: ${animateGradient} 15s ease infinite;
  background-size: 400% 400%;
`;
