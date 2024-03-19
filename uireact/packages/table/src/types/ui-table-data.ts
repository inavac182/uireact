export type UiTableItemData = {
  [key in string]: string;
};

export type UiTableData = {
  headings: string[];
  items: UiTableItem[];
};

export type UiTableItem = {
  id: string;
  cols: string[];
};
