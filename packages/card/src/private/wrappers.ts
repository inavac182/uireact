import styled from 'styled-components';

import { ColorCategory, UiReactPrivateElementProps, getThemeStyling } from '@uireact/foundation';
import { UiCardProps } from '..';
import { getDynamicCardMapper } from '../theme';

type __CardProps = Omit<UiCardProps, 'theme'> &
  UiReactPrivateElementProps & {
    category?: ColorCategory;
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    ${getThemeStyling(props.customTheme, props.selectedTheme, getDynamicCardMapper(props.weight, props.category))}
    ${props.cursorNeeded ? 'cursor: pointer;' : ''}
    ${!props.squared ? 'border-radius: 3px;' : ''}
    ${!props.noPadding ? 'padding: 5px;' : ''}
    ${props.bordered ? 'border-width: 2px; border-style: solid;' : ''}
  `}
`;
