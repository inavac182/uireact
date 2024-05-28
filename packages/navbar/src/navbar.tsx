'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { UiNavbarProps, privateNavbarProps } from './types';
import { NavbarItemWrapper } from './private';

const NavbarWrapper = styled(motion.div)<privateNavbarProps>`
  display: flex;

  a: hover {
    text-decoration: none;
  }

  ${(props: privateNavbarProps) => {
    return `
      flex-direction: ${props.$orientation === 'stacked' ? 'column' : 'row'};
      ${props.$gap ? `gap: var(--spacing-${props.$gap});` : ''}
    `;
  }}
`;

export const UiNavbar: React.FC<UiNavbarProps> = ({
  appearance = 'squared',
  category = 'primary',
  children,
  className,
  orientation = 'inline',
  gap,
  stretch,
  styling,
  testId,
  noBackground,
  hoverColoration
}: UiNavbarProps) => {
  const NavbarContent = React.useMemo(() => {
    const numberOfItems = React.Children.count(children);
    const elements: React.ReactElement[] = [];

    React.Children.map(children, (child, index) => {
      elements.push(
        <NavbarItemWrapper
          $category={category}
          $orientation={orientation}
          key={`navbar-item-${index}`}
          $isFirst={index === 0}
          $isLast={index === numberOfItems - 1}
          $stretchItems={stretch}
          $styling={styling}
          $appearance={appearance}
          $hoverColoration={hoverColoration}
          $noBackground={noBackground}
        >
          {child}
        </NavbarItemWrapper>
      );
    });

    return elements;
  }, [appearance, category, children, hoverColoration, noBackground, orientation, stretch, styling]);

  return (
    <NavbarWrapper
      $category={category}
      className={className} 
      $orientation={orientation} 
      data-testid={testId} 
      $gap={gap}
    >
      <>{NavbarContent}</>
    </NavbarWrapper>
  );
};

UiNavbar.displayName = 'UiNavbar';
