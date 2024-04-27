'use client';
import * as React from 'react';

import { MotionProps, useInView } from 'framer-motion';
import { ColorCategory, ColorToken, UiReactElementProps, SpacingDistribution, UiSpacingProps, UiSpacing } from '@uireact/foundation';

import { CardWrapper, StyledExternalLink } from './private';
import { useRef } from 'react';

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
  /** Built in animations for framer motion */
  animation?: UiReactAnimation
  /** Framer motion props */
  motion?: MotionProps;
};

type UiReactAnimation = 'fadein';
const defaultPadding: UiSpacingProps['padding'] = {all: 'five'};

const fadeInAnimation: MotionProps = {
  initial: {
    y: 10,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
}

const getAnimation = (animation?: UiReactAnimation, motionProps?: MotionProps) => {
  if (animation === 'fadein') {
    return fadeInAnimation;
  } 

  return motionProps;
}

export const UiCard: React.FC<UiCardProps> = ({ 
  weight = '100', 
  category = 'secondary', 
  padding = defaultPadding,
  animation,
  motion,
  ...props
}: UiCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref);
  const motionProps = getAnimation(animation, motion);
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
        ref={ref}
        {...motionProps}
      >
        <UiSpacing padding={padding}>
          {props.children}
        </UiSpacing>
      </CardWrapper>
    ),
    [props]
  );

  if (props.link) {
    <StyledExternalLink href={props.link}>{CardWrapperMemo}</StyledExternalLink>
  }

  return <>{CardWrapperMemo}</>;
};

UiCard.displayName = 'UiCard';
