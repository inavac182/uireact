import * as React from 'react';

import { ThemeMapper } from '../packages/foundation/src';

interface ThemePresentationProps {
  themeMapper: ThemeMapper;
}

const ThemePresentation: React.FC<ThemePresentationProps> = ({ themeMapper }: ThemePresentationProps) => {
  const TableBody = React.useMemo(
    () => (
      <>
        {Object.keys(themeMapper).map((StylePropsKey, key) => (
          <React.Fragment key={`theme-mapper-${key}`}>
            {Object.keys(themeMapper[StylePropsKey]).map((ThemeKey, key) => (
              <tr key={key}>
                <td>{StylePropsKey}</td>
                <td>{ThemeKey}</td>
                <td>{themeMapper[StylePropsKey][ThemeKey].token}</td>
              </tr>
            ))}
            <tr>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </>
    ),
    [themeMapper]
  );

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ borderBlockEnd: '5px solid gray' }}>State</th>
          <th style={{ borderBlockEnd: '5px solid gray' }}>CSS Property</th>
          <th style={{ borderBlockEnd: '5px solid gray' }}>Theme prop</th>
        </tr>
      </thead>
      <tbody>{TableBody}</tbody>
    </table>
  );
};

export default ThemePresentation;
