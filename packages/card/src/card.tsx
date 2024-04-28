'use client';
import * as React from 'react';

import { MotionProps } from 'framer-motion';
import { ColorCategory, ColorToken, UiReactElementProps, SpacingDistribution, UiSpacingProps, UiSpacing } from '@uireact/foundation';
import { CardWrapper, StyledExternalLink } from './private';

export type UiCardProps = UiReactElementProps & {
  /** on click handler used for handling custom card clicks, when passed cursor pointer is used */
  clickHandler?: (idenfifier: string | undefined) => void;
  /** The identifier that is shared to the click handler when card is clicked */
  identifier?: string;
  /** Link for redirecting when card is clicked */
  link?: string;
  /** Padding used inside card */
  padding?: SpacingDistribution;
  /** Color category for the card */
  category?: ColorCategory;
  /** Card weight used for background color */
  weight?: ColorToken;
  /** Card styling */
  styling?: 'outlined' | 'filled';
  /** Framer motion props */
  motion?: MotionProps;
};

const defaultPadding: UiSpacingProps['padding'] = {all: 'five'};

export const UiCard: React.FC<UiCardProps> = ({ 
  weight = '100', 
  category = 'secondary', 
  padding = defaultPadding,
  motion,
  ...props
}: UiCardProps) => {
  const onClick = React.useCallback(() => {
    if (props.clickHandler) {
      props.clickHandler(props.identifier);
    }
  }, [props.identifier, props.clickHandler]);

  const CardWrapperMemo = React.useMemo(
    () => (
      <CardWrapper
        $category={category}
        className={props.className}
        data-testid={props.testId}
        onClick={!props.link ? onClick : undefined}
        $cursorNeeded={props.clickHandler !== undefined}
        $weight={weight}
        $styling={props.styling}
        {...motion}
      >
        <UiSpacing padding={padding}>
          {props.children}
        </UiSpacing>
      </CardWrapper>
    ),
    [props]
  );

  if (props.link) {
    return <StyledExternalLink href={props.link}>{CardWrapperMemo}</StyledExternalLink>
  }

  return <>{CardWrapperMemo}</>;
};

UiCard.displayName = 'UiCard';
