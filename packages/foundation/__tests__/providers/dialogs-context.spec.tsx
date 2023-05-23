import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { UiDialogsControllerContext } from '../../src/providers';
import { IDialogController } from '../../src/types';

const openDialogFn = jest.fn();
const closeDialogFn = jest.fn();

const dialogContext: IDialogController = {
  openDialog: openDialogFn,
  closeDialog: closeDialogFn,
  openedDialogs: [],
};

const ChildComponent = () => {
  const dialogsContext = React.useContext(UiDialogsControllerContext);

  return (
    <>
      <button onClick={() => dialogsContext.openDialog('dialog1')}>open</button>
      <button onClick={() => dialogsContext.closeDialog('dialog2')}>close</button>
    </>
  );
};

const MockedComponent = () => {
  return (
    <UiDialogsControllerContext.Provider value={dialogContext}>
      <ChildComponent />
    </UiDialogsControllerContext.Provider>
  );
};

describe('UiDialogsControllerContext', () => {
  it('Should execute open dialog fn', () => {
    render(<MockedComponent />);

    fireEvent.click(screen.getByRole('button', { name: 'open' }));

    expect(openDialogFn).toHaveBeenCalledTimes(1);
    expect(openDialogFn).toHaveBeenCalledWith('dialog1');
  });

  it('Should execute close dialog fn', () => {
    render(<MockedComponent />);

    fireEvent.click(screen.getByRole('button', { name: 'close' }));

    expect(closeDialogFn).toHaveBeenCalledTimes(1);
    expect(closeDialogFn).toHaveBeenCalledWith('dialog2');
  });

  it('Should error oute if no dialog provider is set up', () => {
    const consoleError = console.error;

    console.error = jest.fn();

    render(<ChildComponent />);

    fireEvent.click(screen.getByRole('button', { name: 'open' }));

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('No dialog controller implemented');

    console.error = consoleError;
  });
});
