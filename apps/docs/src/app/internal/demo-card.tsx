import styled from 'styled-components';

import { ColorCategory, ColorToken, UiSpacing, UiSpacingProps } from '@uireact/foundation';

type DemoCardProps = {
  children?: React.ReactElement;
  shadow?: boolean;
  category?: ColorCategory;
  weight?: ColorToken;
  spacing?: UiSpacingProps['padding'];
}

type DemoCardContentProps = {
  $category: ColorCategory;
  $weight: ColorToken;
  $shadow: boolean;
}

const DemoCardContent = styled.div<DemoCardContentProps>`
  width: 100%;
  box-sizing: border-box;
  min-height: 300px;

  ${(props) => `
    background-color: var(--${props.$category}-token_${props.$weight});
    ${props.$shadow ? `box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px inset;` : ''}
  `}
  border-radius: 30px;
  padding: 30px;
`;

const DemoCardSpacing: UiSpacingProps['padding'] = { all: 'five' };

export const DemoCard = ({ children, shadow = true, category = 'primary', weight = '100', spacing = DemoCardSpacing }: DemoCardProps) => {
  return (
    <UiSpacing padding={spacing}>
      <DemoCardContent $category={category} $weight={weight} $shadow={shadow}>
        {children}
      </DemoCardContent>
    </UiSpacing>
  )
};
