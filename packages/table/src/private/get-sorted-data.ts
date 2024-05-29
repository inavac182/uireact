import { UiTableItem } from "../types";

export const getSortedData = (items: UiTableItem[], orientation: 'UP' | 'DOWN', col: number | null) => {
    if (col === null) {
        return items;
    }

    const dataToSort = [ ...items ];

    dataToSort.sort((fieldA, fieldB) => {
      const colA = fieldA.cols[col];
      const colB = fieldB.cols[col];

      if ((
          typeof colA === 'string' || 
          typeof colA === 'number'
        ) && (
          typeof colB === 'string' || 
          typeof colB === 'number'
        )
      ) {
        if (colA > colB) {
          return orientation === 'UP' ? 1 : -1;
        }
  
        if (colA < colB) {
          return orientation === 'UP' ? -1 : 1;
        }
      }

      return 0;
    });

    return dataToSort;
};
