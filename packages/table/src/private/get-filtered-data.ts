import { UiTableItem } from "../types";

export const getFilteredData = (items: UiTableItem[], filterPhrase: string) => {
    const dataToFilter = [ ...items ];

    const filteredData = dataToFilter.filter((field) => field.cols.filter((item) => {
      if (typeof item === 'string') {
        return item.includes(filterPhrase);
      }

      if (typeof item === 'number') {
        return item.toString().includes(filterPhrase);
      }

      return false;
    }).length > 0);

    return filteredData;
};
