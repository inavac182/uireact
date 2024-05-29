export type UiTableItemData = {
  [key in string]: string;
};

export type UiTableData = {
  headings: string[];
  items: UiTableItem[];
};

export type UiTableItem = {
  id: string | number;
  cols: UiTableItemCol[];
};

export type UiTableItemCol = string | number | React.ReactNode;