import { keyframes } from 'styled-components';

export const animateGradient = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const reverseAnimationGradient = keyframes`
  0% {
		background-position: 100% 50%;
	}
	50% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 100% 50%;
	}
`;
