import React from 'react';

import { UiTable } from '@uireact/table';
import { UiTableData } from '@uireact/table/types';
import { UiSpacing } from '@uireact/foundation';

const data: UiTableData = {
  headings: ['id', 'lorem', 'lorem ipsum'],
  items: [
    {
      id: '1',
      cols: ['1', 'Lorem', 'Lorem ipsum'],
    },
    {
      id: '2',
      cols: ['2', 'Lorem', 'Lorem ipsum'],
    },
    {
      id: '3',
      cols: ['3', 'Lorem', 'Lorem ipsum'],
    },
    {
      id: '4',
      cols: ['4', 'Lorem', 'Lorem ipsum'],
    },
    {
      id: '5',
      cols: ['5', 'Lorem', 'Lorem ipsum'],
    },
  ],
};

export const TableExample = (): JSX.Element => {
  const callback = (id: string) => {
    console.log(id);
  };

  return (
    <UiSpacing padding={{ all: 'five' }}>
      <UiTable data={data} onClick={callback} />
    </UiSpacing>
  );
};
