import styled, { keyframes } from 'styled-components';

export const DialogWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
`;

export const DialogBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  z-index: 50;
`;

export const Dialog = styled.div`
  background-color: var(--primary-token_100);
  color: var(--fonts-token_100);
  z-index: 100;
  min-width: 200px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border-radius: 5px;
  position: absolute;
`;

const animateGradient = keyframes`
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

export const DialogBorder = styled.div`
  border-radius: 5px;
  padding: 2px;
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

export const DialogContent = styled.div`
  background-color: var(--primary-token_100);
  color: var(--fonts-token_100);
  padding: 5px;
  height: 100%;
  border-radius: 5px;
`;
