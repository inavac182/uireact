import React from 'react';

import { UiLink } from '@uireact/text';

export const Logo = (): React.ReactElement => {
  return (
    <UiLink href="/">
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <h1 style={{ fontFamily: 'Sen', display: 'inline' }}>
          <span style={{ color: '#F08B31' }}>@</span>
          <span style={{ color: '#7CE91B' }}>U</span>
          <span style={{ color: '#1BE9D9' }}>i</span>
          <span style={{ color: '#E91BE0' }}>R</span>
          <span style={{ color: '#EDF031' }}>e</span>
          <span style={{ color: '#31F051' }}>a</span>
          <span style={{ color: '#F0314E' }}>c</span>
          <span style={{ color: '#31F096' }}>t</span>
        </h1>
        <img src="/public/sunglasses_cat.gif" alt="icon" width="30px" />
      </div>
    </UiLink>
  );
};
