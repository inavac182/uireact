import React from 'react';

import { render, screen } from '@testing-library/react';
import { DefaultTheme, ThemeColor } from '@uireact/foundation';

import { UiView } from '../src/ui-view';
import { useDialogController } from '../../../src/providers';

type MockedComponentProps = {
  centeredContent?: boolean;
  className?: string;
};

const MockedComponent = (props: MockedComponentProps) => {
  const dialogController = useDialogController();

  return (
    <UiView
      theme={DefaultTheme}
      selectedTheme={ThemeColor.dark}
      dialogController={dialogController}
      className={props.className}
      centeredContent={props.centeredContent}
    >
      <p>Content</p>
    </UiView>
  );
};

describe('<UiView />', () => {
  it('renders fine', () => {
    render(<MockedComponent />);

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine when is centered', () => {
    render(<MockedComponent centeredContent />);

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine when is centered and xlarge', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.innerWidth = 1500;

    render(<MockedComponent centeredContent />);

    expect(screen.getByText('Content')).toBeVisible();
  });
  it('Should add class name', () => {
    render(<MockedComponent className="someClass" />);

    expect(screen.getByText('Content')).toHaveClass('someClass');
  });
});
