import React from 'react';
import { Playground, PlaygroundProps } from 'docz';

import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiDialogsControllerContext } from '@uireact/dialog';
import { UiView } from '@uireact/view';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import themeIcon from './icons/sun-icon.png';
import { useDialogController } from './providers';

type CustomPlaygroundProps = {
  hideThemeSelector: boolean;
  simplePlayground?: boolean;
} & PlaygroundProps;

const CustomPlayground = (props: CustomPlaygroundProps): React.ReactNode => {
  const dialogController = useDialogController();
  const [selectedTheme, setTheme] = React.useState<ThemeColor>(ThemeColor.light);
  const toogleTheme = () => {
    setTheme(selectedTheme === ThemeColor.light ? ThemeColor.dark : ThemeColor.light);
  };

  if (props.simplePlayground) {
    return (
      <>
        <Playground {...props} />
      </>
    );
  }

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme} dialogController={dialogController}>
      <div style={{ background: 'rebeccapurple', padding: 12 }}>
        {!props.hideThemeSelector && (
          <>
            <button onClick={toogleTheme} style={{ marginInlineEnd: '5px' }}>
              <img src={themeIcon} width="20px" />
            </button>
            <p style={{ margin: 0, display: 'inline-block' }}>Theme: {selectedTheme}</p>
          </>
        )}

        <Playground {...props} />
      </div>
    </UiView>
  );
};

export default CustomPlayground;
