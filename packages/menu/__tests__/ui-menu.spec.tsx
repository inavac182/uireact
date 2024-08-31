import React from 'react';

import { act, fireEvent, screen, waitFor } from '@testing-library/react';

import { UiButton } from '@uireact/button';
import { UiSpacing } from '@uireact/foundation';
import { UiText } from '@uireact/text';

import { uiRender } from '../../../__tests__/utils/render';

import { UiMenu } from '../src';

type MockedComponentProps = {
  fullscreenOnSmall?: boolean;
  visible?: boolean;
  closeMenuSpy?: () => void;
};

const MockedComponent = ({ visible = false, fullscreenOnSmall = false, closeMenuSpy }: MockedComponentProps) => {
  const [isVisible, setIsVisible] = React.useState(visible);

  const handleMenuOpen = React.useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const closeMenu = React.useCallback(() => {
    setIsVisible(false);
    closeMenuSpy?.();
  }, [setIsVisible, closeMenuSpy]);

  return (
    <div>
      <div>
        <UiButton onClick={handleMenuOpen}>Open Menu</UiButton>
      </div>
      <p data-testid="content-outside-menu">Some content outside menu</p>
      <UiMenu
        visible={isVisible}
        closeLabel="Close menu dialog"
        closeMenuCB={closeMenu}
        fullscreenOnSmall={fullscreenOnSmall}
        testId="UiMenu"
      >
        <UiSpacing margin={{ all: 'five' }}>
          <UiText align='center'>Menu Content</UiText>
          <div>
            <UiButton onClick={closeMenu} category="secondary" fullWidth>
              Close menu
            </UiButton>
          </div>
        </UiSpacing>
      </UiMenu>
    </div>
  );
};

jest.useFakeTimers();

describe('<UiMenu />', () => {
  beforeEach(() => {
    global.innerWidth = 950;
  });

  it('menu component opens fine', async () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
  });

  it('menu component closes ONLY when esc key is pressed', async () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

    const menu = screen.getByText('Menu Content');

    await waitFor(() => {
      expect(menu).toBeVisible();
    });

    fireEvent.keyDown(menu, { key: 'Ctrl', code: 'Ctrl' });

    expect(menu).toBeVisible();

    fireEvent.keyDown(menu, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();
  });

  it('menu component closes using callback', async () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }));

    expect(screen.queryByText('Menu Content')).not.toBeInTheDocument();
  });

  it('menu renders visible', async () => {
    uiRender(<MockedComponent visible />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });
  });

  it('closes menu when clicking outside menu', async () => {
    uiRender(<MockedComponent visible />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeVisible();
    });

    jest.advanceTimersByTime(200);

    fireEvent.click(screen.getByTestId('content-outside-menu'));

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('Does not execute menu close when clicking outside menu if menu is not visible', async () => {
    uiRender(<MockedComponent />);

    fireEvent.click(screen.getByTestId('content-outside-menu'));

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  describe('fullscreenOnSmall', () => {
    it('Renders dialog instead of menu when fullscreenOnSmall is used and is small breakpoint', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });
      
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('Closes dialog and menu when dialog is shown', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      fireEvent.click(screen.getByRole('button', { name: 'Close menu' }));

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('Closes dialog and menu when dialog is shown and close icon is used', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      fireEvent.click(screen.getByRole('button', { name: 'Close menu dialog' }));

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('Dialog is able to reopen after is closed using the dialog close icon', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      fireEvent.click(screen.getByRole('button', { name: 'Close menu dialog' }));

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });
    });

    it('Renders dialog when screen is resized from large to small', async () => {
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeVisible();
      });

      act(() => {
        global.innerWidth = 400;
        global.dispatchEvent(new Event('resize'));
      });

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });
    });

    it('Renders menu when screen is resized from small to medium', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      act(() => {
        global.innerWidth = 600;
        global.dispatchEvent(new Event('resize'));
      });

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeVisible();
      });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('Renders menu when screen is resized from small to large', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      act(() => {
        global.innerWidth = 950;
        global.dispatchEvent(new Event('resize'));
      });

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeVisible();
      });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('Renders menu when screen is resized from small to xlarge', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      act(() => {
        global.innerWidth = 1300;
        global.dispatchEvent(new Event('resize'));
      });

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeVisible();
      });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('Should NOT show menu when dialog is closed and screen resized from small to large', async () => {
      global.innerWidth = 400;
      uiRender(<MockedComponent fullscreenOnSmall />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      fireEvent.click(screen.getByRole('button', { name: 'Open Menu' }));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeVisible();
      });

      fireEvent.click(screen.getByRole('button', { name: 'Close menu' }));

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      act(() => {
        global.innerWidth = 950;
        global.dispatchEvent(new Event('resize'));
      });

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });
});
