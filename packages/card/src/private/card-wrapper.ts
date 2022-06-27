import { UiReactPrivateElementProps } from '@uireact/foundation';
import { UiPrivateCard } from './types';
import styled from 'styled-components';

type __CardProps = UiPrivateCard &
  UiReactPrivateElementProps & {
    cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    color: '#fff';
    background-color: '#000';

    ${props.cursorNeeded ? 'cursor: pointer;' : ''}
  `}

  border-radius: 3px;
  border: 1px solid purple;
`;
