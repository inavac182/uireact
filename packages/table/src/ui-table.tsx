import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { ColorCategory, UiReactElementProps, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiInput } from '@uireact/form';
import { UiIcon } from '@uireact/icons';
import { UiGrid, UiGridItem } from '@uireact/grid';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';

import { UiTableData } from './types';
import { getFilteredData, getSortedData } from './private';

import styles from './ui-table.scss';

export type UiTableProps = {
  /** Padding to be added to each heading cell */
  headingPadding?: UiSpacingProps['padding'];
  /** Padding to be added to each table cell */
  cellPadding?: UiSpacingProps['padding'];
  /** The data object that will be rendered in the table */
  data: UiTableData;
  /** If the table should render borders */
  bordered?: boolean;
  /** The theme category that will be applied to the styling */
  category?: ColorCategory;
  /** Flag to disable the filter bar */
  withFilter?: boolean;
  /** Flag to disable the sort header */
  withSort?: boolean;
  /** Flag for positioning the filter bar */
  filterBoxPosition?: 'left' | 'right';
  /** The id of the selected field */
  selected?: string;
  /** onClick CB to be executed when a row is selected */
  onClick?: (id: string | number) => void;
} & UiReactElementProps;

export const UiTable: React.FC<UiTableProps> = ({
  bordered,
  className = '',
  cellPadding = {},
  headingPadding = {},
  data,
  category = 'primary',
  testId,
  withFilter = true,
  withSort = true,
  filterBoxPosition,
  selected,
  onClick,
}: UiTableProps) => {
  const [_data, setPrivateData] = useState(data);
  const [sortedCol, setSortedCol] = useState<number | null>(null);
  const [sortedOrientation, setSortedOrientation] = useState<'UP' | 'DOWN'>('UP');
  const [filterPhrase, setFilterPhrase] = useState('');

  const onFilter = useCallback((e: FormEvent<HTMLInputElement>) => {
    const newFilterPhrase = e.currentTarget.value;
    setFilterPhrase(newFilterPhrase);
  }, [setFilterPhrase]);

  const onSort = useCallback((index: number) => {
    const isColAlreadySelected = index === sortedCol;

    if (isColAlreadySelected) {
      if (sortedOrientation === 'UP') {
        setSortedOrientation('DOWN');
        return;
      } else {
        setSortedOrientation('UP');
        setSortedCol(null);
        return;
      }
    }

    setSortedOrientation('UP');
    setSortedCol(index);
  }, [sortedCol, sortedOrientation]);

  const handleClick = useCallback(
    (id: string | number) => {
      onClick?.(id);
    },
    [onClick]
  );

  useEffect(() => {
    const filteredItems = getFilteredData(data.items, filterPhrase);
    const sortedItems = getSortedData(filteredItems, sortedOrientation, sortedCol);
  
    setPrivateData({ ...data, items: sortedItems });
  }, [sortedCol, sortedOrientation, data, filterPhrase]);

  useEffect(() => {
    setPrivateData(data);
  }, [data]);

  return (
    <div className={`${bordered ? styles.borderedTable : ''}`}>
      {withFilter && (
        <UiGrid cols={{ small: 1, medium: 2, large: 3, xlarge: 3 }}>
          <UiGridItem cols={!filterBoxPosition ? 3 : 1} startingCol={filterBoxPosition === 'right' ? 3 : 1}>
            <UiInput value={filterPhrase} onChange={onFilter} icon={<UiIcon icon="Search" />} category={category} />
          </UiGridItem>
        </UiGrid>
      )}
      <table className={`${className} ${styles.table}`} data-testid={testId} cellSpacing="0">
        <thead>
          <tr>
            {_data.headings.map((heading, index) => (
              <th className={styles.tableHeadingCol} key={`table-heading-${index}`} onClick={() => { onSort(index) }}>
                <UiSpacing padding={headingPadding}>
                  <UiFlexGrid>
                    <UiFlexGridItem grow={1}>
                      {heading.label}
                    </UiFlexGridItem>
                    {withSort && heading.sort !== false && (
                      <UiFlexGridItem>
                        {sortedCol === index && sortedOrientation === 'UP' && <UiIcon icon="CaretUp" testId='sort-icon-up' />}
                        {sortedCol === index && sortedOrientation === 'DOWN' && <UiIcon icon="CaretDown" testId='sort-icon-down' />}
                        {sortedCol !== index && <UiIcon icon='Sort' testId='sort-icon' />}
                      </UiFlexGridItem>
                    )}
                  </UiFlexGrid>
                </UiSpacing>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {_data.items.map((field, rowIndex) => (
            <tr
              className={`${onClick ? `${styles.tableRowPointer} hover-bg-${category}-100` : ''} ${selected === field.id ? `bg-${category}-100` : ''} `}
              key={`table-item-index-${rowIndex}`}
              onClick={() => handleClick(field.id)}
            >
              {field.cols.map((text, index) => (
                <td className={styles.tableCol} key={`table-item-${rowIndex}-colum-index-${index}`}>
                  <UiSpacing padding={cellPadding}>
                    {text}
                  </UiSpacing>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UiTable.displayName = 'UiTable';
