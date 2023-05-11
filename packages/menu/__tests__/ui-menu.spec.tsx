import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import { UiButton } from '@uireact/button';
import { UiSpacing, Sizing } from '@uireact/foundation';
import { UiText } from '@uireact/text';

import { uiRender } from '../../../__tests__/utils/render';

import { UiMenu } from '../src';

type MockedComponentProps = {
  visible?: boolean;
};

const MockedComponent = ({ visible = false }: MockedComponentProps) => {
  const [isVisible, setIsVisible] = React.useState(visible);

  const handleMenuOpen = React.useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const closeMenu = React.useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <div>
      <div>
        <UiButton onClick={handleMenuOpen}>Open Menu</UiButton>
      </div>
      <UiMenu visible={isVisible} closeMenuCB={closeMenu}>
        <UiSpacing margin={{ all: Sizing.five }}>
          <UiText centered>Menu Content</UiText>
          <div>
            <UiButton onClick={closeMenu} buttonType="secondary" fullWidth>
              Close menu
            </UiButton>
          </div>
        </UiSpacing>
      </UiMenu>
    </div>
  );
};

describe('<UiMenu />', () => {
  it('menu component opens fine', () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

    expect(screen.getByRole('menu')).toBeVisible();
  });

  it('menu component closes ONLY when esc key is pressed', () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

    const menu = screen.getByText('Menu Content');

    expect(menu).toBeVisible();

    fireEvent.keyDown(menu, { key: 'Ctrl', code: 'Ctrl' });

    expect(menu).toBeVisible();

    fireEvent.keyDown(menu, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();
  });

  it('menu component closes using callback', () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

    expect(screen.getByRole('menu')).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }));

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();
  });

  it('menu renders visible', () => {
    uiRender(<MockedComponent visible />);

    expect(screen.getByRole('menu')).toBeVisible();
  });
});
