import React from 'react';

import { UiViewRow } from '../../src';

export const ViewRowExample: React.FC = () => {
  return (
    <>
      <UiViewRow weight="10">
        <p>A row with weight 10</p>
      </UiViewRow>
      <UiViewRow weight="50">
        <p>A row with weight 50</p>
      </UiViewRow>
      <UiViewRow>
        <p>A row with default theme</p>
      </UiViewRow>
      <UiViewRow weight="150">
        <p>A row with weight 150</p>
      </UiViewRow>
      <UiViewRow weight="200">
        <p>A row with weight 200</p>
      </UiViewRow>
      <UiViewRow weight="200" noBackground>
        <p>A row without background color</p>
      </UiViewRow>
      <UiViewRow inverseFont category="negative">
        <p>Row with inverse font and category</p>
      </UiViewRow>
    </>
  );
};
