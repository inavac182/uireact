import styled from 'styled-components';

import { ThemeColor } from '@uireact/foundation';

import { animateGradient } from './animation';
import { getBorderRadius } from './border-radius';
import { getPadding } from './padding';
import { UiDialogType } from 'types';

export const BorderedWrappedDiv = styled.div<{ $selectedTheme: ThemeColor; $type?: UiDialogType }>`
  border-radius: ${(props) => getBorderRadius(props.$type)};
  padding: ${(props) => `${props.$selectedTheme === ThemeColor.dark ? getPadding(props.$type) : '0'}`};
  height: 100%;

  background: linear-gradient(
    -45deg,
    var(--primary-token_100),
    var(--secondary-token_100),
    var(--tertiary-token_100),
    var(--primary-token_10),
    var(--secondary-token_10),
    var(--tertiary-token_10),
    var(--primary-token_200),
    var(--secondary-token_200),
    var(--tertiary-token_200)
  );

  animation: ${animateGradient} 15s ease infinite;
  background-size: 400% 400%;
`;
