import React from 'react';

import { UiButton } from '@uireact/button';
import { UiView } from '@uireact/view';
import { UiText } from '@uireact/text';

import { UiMenu } from '../../src';
import { DefaultTheme, Sizing, ThemeColor, UiSpacing } from '@uireact/foundation';

export const MenuExample: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedTheme, setSelectedTheme] = React.useState(ThemeColor.light);

  const handleMenuOpen = React.useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const closeMenu = React.useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const toggleTheme = React.useCallback(() => {
    setSelectedTheme((selectedTheme) => (selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light));
  }, [setSelectedTheme]);

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme}>
      <UiSpacing padding={{ all: Sizing.five }}>
        <div>
          <UiButton onClick={handleMenuOpen}>Open Menu</UiButton>
        </div>
        <UiMenu visible={isVisible} closeMenuCB={closeMenu} fullscreenOnSmall>
          <UiSpacing margin={{ all: Sizing.five }}>
            <UiText centered>Menu Content</UiText>
            <div>
              <UiButton onClick={closeMenu} buttonType="secondary" fullWidth>
                Close menu
              </UiButton>
            </div>
            <UiButton onClick={toggleTheme} buttonType="tertiary" fullWidth>
              Tootle Theme from inside menu
            </UiButton>
          </UiSpacing>
        </UiMenu>
        <UiText>Some content behind the menu</UiText>
        <UiSpacing margin={{ block: Sizing.five }}>
          <UiText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida commodo massa non porttitor. Fusce
            sapien lacus, malesuada vel bibendum sed, tempus vitae elit. Vestibulum lectus magna, rutrum vitae
            consectetur eu, malesuada quis nunc. In vitae lectus id massa cursus vestibulum. Quisque accumsan et sem et
            efficitur. Nulla varius lacus varius aliquet lobortis. Curabitur vitae urna diam.
          </UiText>
        </UiSpacing>
        <UiButton onClick={toggleTheme}>Tootle Theme</UiButton>
      </UiSpacing>
    </UiView>
  );
};
