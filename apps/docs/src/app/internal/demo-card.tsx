import styled from 'styled-components';

import { UiSpacing, UiSpacingProps } from '@uireact/foundation';

type DemoCardProps = {
  children?: React.ReactElement;
  transparent?: boolean;
}

type DemoCardContentProps = {
  $transparent?: boolean;
}

const DemoCardContent = styled.div<DemoCardContentProps>`
  width: 100%;
  box-sizing: border-box;
  min-height: 300px;
  ${(props) => `
    ${!props.$transparent ? `
      background-color: var(--secondary-token_100);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px inset;
    ` : ''}
  `}
  border-radius: 30px;
  padding: 30px;
`;

const DemoCardSpacing: UiSpacingProps['padding'] = { all: 'five' };

export const DemoCard = ({ children, transparent }: DemoCardProps) => {
  return (
    <UiSpacing padding={DemoCardSpacing}>
      <DemoCardContent $transparent={transparent}>
        {children}
      </DemoCardContent>
    </UiSpacing>
  )
};
