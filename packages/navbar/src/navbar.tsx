'use client';
import React from 'react';
import { motion as MotionParent } from 'motion/react';

import { UiNavbarProps } from './types';
import styles from './ui-navbar.scss';

export const UiNavbar: React.FC<UiNavbarProps> = ({
  rounded,
  category = 'primary',
  children,
  className = '',
  orientation = 'inline',
  gap,
  stretch,
  styling = 'filled',
  testId,
  noBackground,
  hoverColoration,
  motion
}: UiNavbarProps) => {
  let classes = `${className} ${styles.navbar} ${styles[orientation]} ${gap ? `gap-${gap}` : ''}`;

  if (rounded === 'edges') {
    classes = `${classes} ${styles.roundedEdges}`;
  }

  const NavbarContent = React.useMemo(() => {
    const elements: React.ReactElement[] = [];

    React.Children.map(children, (child, index) => {
      let classes = `${styles.itemWrapper}`;

      if (React.isValidElement(child)) {
        const props = child.props;

        if (styling === 'bordered') {
          classes = `${classes} hover-border-${category}-150 ${orientation === 'stacked' ? styles.stackedBordered : styles.inlineBordered}`;

          if (props.active) {
            classes = `${classes} border-${category}-50`;
          }
        } else {
          classes = `${classes} ${!noBackground ? `bg-${category}-100` : ''}`;

          if (hoverColoration === 'light') {
            classes = `${classes} hover-bg-${category}-${props.active ? '50' : '10'}`;
          } else {
            classes = `${classes} hover-bg-${category}-${props.active ? '150' : '200'}`;
          }
        }

        if (rounded === 'all') {
          classes = `${classes} ${styles.rounded}`;
        }

        elements.push(
          <div key={`navbar-item-${index}`} className={classes}>
            {child}
          </div>
        );
      }
    });

    return elements;
  }, [children, styling, rounded, category, orientation, noBackground, hoverColoration]);

  return (
    <MotionParent.div className={classes} data-testid={testId} {...motion}>
      <>{NavbarContent}</>
    </MotionParent.div>
  );
};

UiNavbar.displayName = 'UiNavbar';
