import React from 'react';

import { UiButton } from '@uireact/button';
import { UiText } from '@uireact/text';

import { UiMenu } from '../../src';
import { UiSpacing } from '@uireact/foundation';

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
        <UiButton onClick={handleMenuOpen}>Open Menu</UiButton>
      </div>
      <UiMenu visible={isVisible} closeMenuCB={closeMenu} fullscreenOnSmall>
        <UiSpacing margin={{ all: 'five' }}>
          <UiText centered>Menu Content</UiText>
          <div>
            <UiButton onClick={closeMenu} category="secondary" fullWidth>
              Close menu
            </UiButton>
          </div>
        </UiSpacing>
      </UiMenu>
      <UiText>Some content behind the menu</UiText>
      <UiSpacing margin={{ block: 'five' }}>
        <UiText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida commodo massa non porttitor. Fusce sapien
          lacus, malesuada vel bibendum sed, tempus vitae elit. Vestibulum lectus magna, rutrum vitae consectetur eu,
          malesuada quis nunc. In vitae lectus id massa cursus vestibulum. Quisque accumsan et sem et efficitur. Nulla
          varius lacus varius aliquet lobortis. Curabitur vitae urna diam.
        </UiText>
      </UiSpacing>
    </UiSpacing>
  );
};
