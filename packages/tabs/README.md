# @UiReact
![UiReact icon](https://www.uireact.io/_next/static/media/sunglasses_cat.a5f3369a.gif)

This is a React UI library, that defines a customizable theme object that powers all colorations, texts, sizes, etc.. Across your react application.

We are built using framer-motion for great animations and styled-components for easy CSS management.

You should visit our docs page for all information [@uireact docs](https://uireact.io).

## @uireact/tabs

This package exports `UiTabs` and `UiTabsItem` component which help to render tabs.

We have a page dedicated to this component [@uireact/tabs docs](https://www.uireact.io/docs/tabs).

## Usage

### Get @UiReact library working

First step is to get the library working for this you can look at this doc: [Getting started](https://www.uireact.io/docs).

### Install package

If using npm:

```
npm i -S @uireact/tabs
```

### Use it

```tsx
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
```
