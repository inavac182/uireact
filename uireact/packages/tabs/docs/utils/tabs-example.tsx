import React from 'react';

import { UiCard } from '@uireact/card';
import { UiList, UiListItem } from '@uireact/list';
import { UiText } from '@uireact/text';

import { UiTabs, UiTabItem } from '../../src/';

const Fruits = () => (
  <div>
    <UiList>
      <UiListItem>
        <UiText>🍎 Apple</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍐 Pear</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍊 Orange</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍌 Banana</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍉 Watermelon</UiText>
      </UiListItem>
    </UiList>
  </div>
);

const Veggies = () => (
  <div>
    <UiList>
      <UiListItem>
        <UiText>🥑 Avocado</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🥦 Brocolli</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍅 Tomato</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🌶️ Jalapeño</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🫑 Pepper</UiText>
      </UiListItem>
    </UiList>
  </div>
);

const Meats = () => (
  <div>
    <UiList>
      <UiListItem>
        <UiText>🥩 T-bone</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍗 Drums</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🍖 Ribs</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🥓 Bacon</UiText>
      </UiListItem>
      <UiListItem>
        <UiText>🦴 Bone Marrow</UiText>
      </UiListItem>
    </UiList>
  </div>
);

export const TabsExample: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleTabClick = React.useCallback(
    (identifier: number) => {
      setSelectedTab(identifier);
    },
    [setSelectedTab]
  );

  return (
    <UiCard noPadding>
      <UiTabs rounded>
        <UiTabItem<number> selected={selectedTab === 1} identifier={1} handleClick={handleTabClick}>
          <UiText>Fruits</UiText>
        </UiTabItem>
        <UiTabItem<number> selected={selectedTab === 2} identifier={2} handleClick={handleTabClick}>
          <UiText>Vegetables</UiText>
        </UiTabItem>
        <UiTabItem<number> selected={selectedTab === 3} identifier={3} handleClick={handleTabClick}>
          <UiText>Meats</UiText>
        </UiTabItem>
      </UiTabs>
      {selectedTab === 1 && <Fruits />}
      {selectedTab === 2 && <Veggies />}
      {selectedTab === 3 && <Meats />}
    </UiCard>
  );
};
