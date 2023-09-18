import { ColorCategory } from '@uireact/foundation';

export type privateTableProps = {
  $category: ColorCategory;
  cellSpacing: string;
};

export type privateTableRowProps = {
  $category: ColorCategory;
  $hasClickHandler?: boolean;
  $isSelected: boolean;
};
