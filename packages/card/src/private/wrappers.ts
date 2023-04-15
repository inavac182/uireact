import styled from 'styled-components';

import { UiReactPrivateElementProps, getThemeStyling } from '@uireact/foundation';
import { UiCardProps } from '..';
import { themeMapper } from '../theme';

type __CardProps = UiCardProps &
  UiReactPrivateElementProps & {
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, themeMapper)}
    ${props.cursorNeeded ? 'cursor: pointer;' : ''}
  `}

  padding: 5px;
  border-radius: 3px;
`;
