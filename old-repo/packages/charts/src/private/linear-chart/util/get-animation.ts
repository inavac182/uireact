import { keyframes } from 'styled-components';
import { Keyframes } from 'styled-components/dist/types';

export const getAnimation = (percentage: number): Keyframes => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${percentage}%;
  }
`;
