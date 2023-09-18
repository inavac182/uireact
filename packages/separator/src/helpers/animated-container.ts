import styled from 'styled-components';

import { animateGradient, reverseAnimationGradient } from './gradient-animation';

type AnimatedContainerProps = {
  $delay?: number;
  $inverse?: boolean;
};

export const AnimatedContainer = styled.div<AnimatedContainerProps>`
  width: 100%;
  height: 1px;
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

  animation: ${(props) => (props.$inverse ? reverseAnimationGradient : animateGradient)} 30s ease infinite;
  animation-delay: ${(props) => (props.$delay ? props.$delay : '0')}ms;
  background-size: 400% 400%;
`;
