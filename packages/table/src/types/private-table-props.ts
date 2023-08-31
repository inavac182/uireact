import { ColorCategory, UiReactPrivateElementProps } from '@uireact/foundation';

export type privateTableProps = {
  $category: ColorCategory;
  cellSpacing: string;
} & UiReactPrivateElementProps;

export type privateTableRowProps = {
  $category: ColorCategory;
  $hasClickHandler?: boolean;
} & UiReactPrivateElementProps;
