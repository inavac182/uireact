import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import { DefaultTheme, ThemeColor, ThemeContext } from '@uireact/foundation';

import { uiRender } from '../../../__tests__/utils/render';
import { UiDialog, UiDialogType, useDialog } from '../src';

type MockedComponentProps = {
  type?: UiDialogType;
  title?: string;
  hideCloseIcon?: boolean;
  handleDialogClose?: () => void;
};

const handleDialogClose = jest.fn();

const MockedComponent = ({ hideCloseIcon, title, type, handleDialogClose }: MockedComponentProps) => {
  const { actions } = useDialog('mockedDialog');
  const seconDialogData = useDialog('secondDialog');

  const openCB = () => {
    actions.openDialog();
  };

  const openSecondCB = () => {
    seconDialogData.actions.openDialog();
  };

  return (
    <>
      <button onClick={openCB}>Open Dialog</button>
      <button onClick={openSecondCB}>Open Second Dialog</button>
      <UiDialog
        dialogId="mockedDialog"
        type={type}
        title={title}
        handleDialogClose={handleDialogClose}
        hideCloseIcon={hideCloseIcon}
      >
        <p>Dialog content</p>
      </UiDialog>
    </>
  );
};

const MockedNotCorrectlySetupComponent = () => {
  const { actions } = useDialog('mockedDialog');
  const seconDialogData = useDialog('secondDialog');

  const openCB = () => {
    actions.openDialog();
  };

  const openSecondCB = () => {
    seconDialogData.actions.openDialog();
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme: DefaultTheme, selectedTheme: ThemeColor.dark }}>
        <button onClick={openCB}>Open Dialog</button>
        <button onClick={openSecondCB}>Open Second Dialog</button>
        <UiDialog dialogId="mockedDialog">
          <p>Dialog content</p>
        </UiDialog>
      </ThemeContext.Provider>
    </>
  );
};

describe('<UiDialog />', () => {
  afterEach(() => {
    handleDialogClose.mockClear();
  });

  it('opens and closes dialog using ❌ button', () => {
    uiRender(<MockedComponent handleDialogClose={handleDialogClose} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    expect(screen.getByText('Dialog content')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: '❌' }));

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    expect(handleDialogClose).toHaveBeenCalledTimes(1);
  });

  it('opens and closes dialog using esc key', () => {
    uiRender(<MockedComponent handleDialogClose={handleDialogClose} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    expect(handleDialogClose).toHaveBeenCalledTimes(1);
  });

  it('opens and closes dialog when is type bottom', () => {
    uiRender(<MockedComponent type={UiDialogType.BOTTOM} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });

  it('opens and closes dialog when is type fullscreen', () => {
    uiRender(<MockedComponent type={UiDialogType.FULLSCREEN} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });

  it('opens and closes dialog when is type LEFT', () => {
    uiRender(<MockedComponent type={UiDialogType.LEFT} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });

  it('opens and closes dialog when is type RIGHT', () => {
    uiRender(<MockedComponent type={UiDialogType.RIGHT} />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' });

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });

  it('NOT close dialog if key pressed is not esc key', () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
    fireEvent.keyDown(dialog, { key: 'Enter', code: 'Enter' });

    expect(dialog).toBeVisible();
  });

  it('opens and closes dialog clicking in dialog background', () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    expect(screen.getByRole('dialog')).toBeVisible();
    fireEvent.click(screen.getByTestId('dialog-background'));

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
  });

  it('Triggering a second dialog does NOT open first dialog', () => {
    uiRender(<MockedComponent />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Second Dialog'));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Console error logged if no provider is set for dialogs', () => {
    const consoleError = console.error;

    console.error = jest.fn();

    render(<MockedNotCorrectlySetupComponent />);

    expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Open Dialog'));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('No dialog controller implemented');

    console.error = consoleError;
  });

  describe('With dialog toolbar', () => {
    it('Should render dialog toolbar', () => {
      uiRender(<MockedComponent title="Dialog toolbar" />);

      expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Open Dialog'));

      expect(screen.getByText('Dialog content')).toBeVisible();
      expect(screen.getByText('Dialog toolbar')).toBeVisible();
    });

    it('Should close dialog using close icon inside dialog toolbar', () => {
      uiRender(
        <MockedComponent title="Dialog toolbar" type={UiDialogType.FULLSCREEN} handleDialogClose={handleDialogClose} />
      );

      expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Open Dialog'));

      expect(screen.getByText('Dialog content')).toBeVisible();
      expect(screen.getByText('Dialog toolbar')).toBeVisible();

      fireEvent.click(screen.getByRole('button', { name: '❌' }));

      expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
      expect(handleDialogClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Close icon', () => {
    it('Should hide close icon', () => {
      uiRender(<MockedComponent hideCloseIcon />);

      expect(screen.queryByText('Dialog content')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('Open Dialog'));

      expect(screen.getByText('Dialog content')).toBeVisible();
      expect(screen.queryByRole('button', { name: '❌' })).not.toBeInTheDocument();
    });
  });
});
