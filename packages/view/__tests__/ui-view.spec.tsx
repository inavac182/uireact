import React from 'react';

import { render, screen } from '@testing-library/react';
import { DefaultTheme, ThemeColor } from '@uireact/foundation';

import { UiView } from '../src/ui-view';

describe('<UiView />', () => {
  it('renders fine', () => {
    render(
      <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
        <p>Content</p>
      </UiView>
    );

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine when is centered', () => {
    render(
      <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark} centeredContent>
        <p>Content</p>
      </UiView>
    );

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('renders fine when is centered and xlarge', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.innerWidth = 1500;

    render(
      <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark} centeredContent>
        <p>Content</p>
      </UiView>
    );

    expect(screen.getByText('Content')).toBeVisible();
  });
  it('Should add class name', () => {
    render(
      <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark} className="someClass">
        Content
      </UiView>
    );

    expect(screen.getByText('Content')).toHaveClass('someClass');
  });
});
