import styled from "styled-components";

import { animateGradient } from "./gradient-animation";

export const GradientBorder = styled.div<{ $padding?: string, $radius?: string}>`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: 100%;
  width: 100%;

  ${(props) => props.$padding ? `padding: ${props.$padding};` : ''}
  ${(props) => props.$radius ? `border-radius: ${props.$radius};` : ''}

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
