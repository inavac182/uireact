import { ColorCategory } from '@uireact/foundation';
import React from 'react';

import styled, { keyframes } from 'styled-components';

const NotificationTimerWrapper = styled.div`
  width: 100%;
  height: 10px;
`;

const animation = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const NotificationTimerProgress = styled.div<{ $timer: number; $category: ColorCategory }>`
  width: 0%;
  height: 10px;
  animation: ${animation} ${(props) => `${props.$timer / 1000}s`} linear forwards;
  border-radius: 0 10px 10px 10px;

  ${(props) => `
    background-color: var(--${props.$category}-token_200);
  `}
`;

type NotificationTimerProps = {
  time: number;
  category: ColorCategory;
};

export const NotificationTimer: React.FC<NotificationTimerProps> = ({ time, category }: NotificationTimerProps) => {
  return (
    <>
      <NotificationTimerWrapper>
        <NotificationTimerProgress $timer={time} $category={category} />
      </NotificationTimerWrapper>
    </>
  );
};
