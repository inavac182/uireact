import { ColorCategory, UiReactPrivateElementProps } from '@uireact/foundation';

export type privateTableProps = {
  $category: ColorCategory;
  cellSpacing: string;
} & UiReactPrivateElementProps;
