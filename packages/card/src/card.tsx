'use client';
import * as React from 'react';

import { motion as MotionParent } from 'framer-motion';
import { UiSpacingProps, getSpacingClass } from '@uireact/foundation';

import styles from './ui-card.scss';
import { getCardClasses } from './private';
import { UiCardProps } from 'types';

const defaultPadding: UiSpacingProps['padding'] = {all: 'five'};

export const UiCard: React.FC<UiCardProps> = ({ 
  weight = '100', 
  category = 'secondary', 
  padding = defaultPadding,
  motion,
  className = '',
  styling = 'filled',
  clickHandler,
  testId,
  ...props
}: UiCardProps) => {
  const onClick = React.useCallback(() => {
    if (clickHandler) {
      clickHandler(props.identifier);
    }
  }, [clickHandler, props]);

  const CardWrapperMemo = React.useMemo(
    () => (
        <MotionParent.div
          className={`${styles.card} ${className} ${getCardClasses(styling, category, weight)} ${getSpacingClass('padding', padding)} ${clickHandler ? 'pointer' : ''}`}
          data-testid={testId}
          onClick={!props.link ? onClick : undefined}
          {...motion}
          {...props}
        >
            {props.children}
        </MotionParent.div>
    ), [category, className, clickHandler, motion, onClick, padding, props, styling, testId, weight]
  );

  if (props.link) {
    return <a className={styles.cardLink} href={props.link}>{CardWrapperMemo}</a>
  }

  return <>{CardWrapperMemo}</>;
};

UiCard.displayName = 'UiCard';
