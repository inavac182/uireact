'use client';
import React from 'react';

import { MotionProps } from 'motion/react';

import { UiButton, UiPrimaryButton, UiTertiaryButton } from '@uireact/button';
import { UiCard } from '@uireact/card';
import { UiText } from '@uireact/text';
import { UiReactFadeLeft } from '@uireact/framer-animations';
import { UiMenu } from '@uireact/menu';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiIcon } from '@uireact/icons';
import { UiFlexGrid } from '@uireact/flex';

const buttonSpacing: UiSpacingProps['padding'] = {
  block: 'four'
}

export const MenuExample: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleMenuOpen = React.useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const closeMenu = React.useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <UiSpacing padding={{ all: 'five' }}>
      <div>
        <UiButton category='tertiary' onClick={handleMenuOpen}>Open Menu</UiButton>
      </div>
      <UiMenu visible={isVisible} closeMenuCB={closeMenu} fullscreenOnSmall>
        <UiSpacing margin={{ all: 'five' }}>
          <UiText align='center'>Menu Content</UiText>
          <div>
            <UiPrimaryButton onClick={closeMenu} fullWidth>
              Close menu
            </UiPrimaryButton>
          </div>
        </UiSpacing>
        <UiSpacing margin={{ all: 'five' }}>
          <UiText align='center'>Menu Content</UiText>
          <div>
            <UiTertiaryButton fullWidth>
              Some other button
            </UiTertiaryButton>
          </div>
        </UiSpacing>
      </UiMenu>
      <UiText>Some content behind the menu</UiText>
      <UiSpacing margin={{ block: 'five' }}>
        <UiText wrap='break'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida commodo massa non porttitor. Fusce sapien
          lacus, malesuada vel bibendum sed, tempus vitae elit. Vestibulum lectus magna, rutrum vitae consectetur eu,
          malesuada quis nunc. In vitae lectus id massa cursus vestibulum. Quisque accumsan et sem et efficitur. Nulla
          varius lacus varius aliquet lobortis. Curabitur vitae urna diam.
        </UiText>
      </UiSpacing>
    </UiSpacing>
  );
};

const getDelayedAnimation = (index: number): MotionProps => {
  return { ...UiReactFadeLeft, transition: { delay: 0.2 * index } };
};

export const AnimatedMenuExample: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleMenuOpen = React.useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const closeMenu = React.useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <UiSpacing padding={{ all: 'five' }}>
      <div>
        <UiPrimaryButton onClick={handleMenuOpen}>Open Menu</UiPrimaryButton>
      </div>
      <UiMenu visible={isVisible} closeMenuCB={closeMenu} fullscreenOnSmall>
        <UiSpacing margin={{ all: 'five' }}>
          <UiFlexGrid gap='four' direction='column'>
            <UiCard motion={getDelayedAnimation(1)} styling='outlined' category='tertiary'>
              <UiFlexGrid gap='four'>
                <UiIcon icon="BatteryFull" category='tertiary' />
                <p>Option 1</p>
              </UiFlexGrid>
            </UiCard>
            <UiCard motion={getDelayedAnimation(2)} styling='outlined' category='secondary'>
              <UiFlexGrid gap='four'>
                <UiIcon icon="Heart" category='secondary' />
                <p>Option 2</p>
              </UiFlexGrid>
            </UiCard>
            <UiCard motion={getDelayedAnimation(3)} styling='outlined' category='warning'>
              <UiFlexGrid gap='four'>
                <UiIcon icon="Coffee" category='warning' />
                <p>Option 3</p>
              </UiFlexGrid>
            </UiCard>
            <UiCard motion={getDelayedAnimation(4)} styling='outlined' category='positive'>
              <UiFlexGrid gap='four'>
                <UiIcon icon="City" category='positive' />
                <p>Option 4</p>
              </UiFlexGrid>
            </UiCard>
            <UiButton onClick={closeMenu} category="secondary" fullWidth>
              <UiSpacing padding={buttonSpacing}>
                Close menu
              </UiSpacing>
            </UiButton>
          </UiFlexGrid>
        </UiSpacing>
      </UiMenu>
    </UiSpacing>
  );
};