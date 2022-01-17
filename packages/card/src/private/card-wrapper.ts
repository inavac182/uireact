import { CategoryTheme, getColor, StyleProps, UiReactElementProp } from '@uireact/foundation';
import { UiPrivateCard } from './types';
import styled from 'styled-components';

type privateCardProps = UiPrivateCard &
  UiReactElementProp & {
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<privateCardProps>`
  ${(props) => `
    color: ${getColor(CategoryTheme.CONTAINERS, StyleProps.paragraph, props.customTheme)};
    background-color: ${getColor(CategoryTheme.CONTAINERS, StyleProps.background, props.customTheme)};

    ${props.cursorNeeded ? 'cursor: pointer;' : ''}
  `}

  border-radius: 3px;
  border: 1px solid purple;
`;
