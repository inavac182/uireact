import styled from 'styled-components';

import { SizesProp } from '@uireact/foundation';

import { privateInputDatepickerProps } from '../types';
import { getPadding } from '../utils';

export const Input = styled.input<privateInputDatepickerProps>`
  ${(props: privateInputDatepickerProps) => `
    font-family: var(--font-family);
    font-size: var(--texts-regular);
    background-color: var(--primary-token_100);
    border: 2px solid var(--${props.$category ?? 'primary'}-token_200);
    color: var(--fonts-token_100);
    border-radius: 5px;

    &:focus {
      background-color: var(--primary-token_200);
      border-color: var(--${props.$category ?? 'tertiary'}-token_100);
      border-style: solid;
      border-width: 2px;
    }

    &:disabled {
      cursor: not-allowed;
    }

    padding-top: ${getPadding(props.$size || 'regular')};
    padding-bottom: ${getPadding(props.$size || 'regular')};
    padding-left: ${props.$withIcon ? '30px' : '5px'};
    outline: none;
    width: 100%;
    box-sizing: border-box;
  `}
`;

export const WrapperDiv = styled.div`
  display: flex;
`;

export const InputContentDiv = styled.div`
  position: relative;
`;

export const InputDiv = styled.div`
  display: inline-block;
  flex-grow: 1;
  position: relative;
`;

export const IconContainer = styled.span<{ $size?: SizesProp }>`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
