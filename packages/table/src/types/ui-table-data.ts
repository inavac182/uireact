export type UiTableItemData = {
  [key in string]: string;
};

export type UiTableHeading = {
  label: string;
  sort?: boolean;
}

export type UiTableData = {
  headings: UiTableHeading[];
  items: UiTableItem[];
};

export type UiTableItem = {
  id: string | number;
  cols: UiTableItemCol[];
};

export type UiTableItemCol = string | number | React.ReactNode;
