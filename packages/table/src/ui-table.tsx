import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import { ColorCategory, ThemeContext, UiReactElementProps, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiInput } from '@uireact/form';
import { UiIcon } from '@uireact/icons';
import { UiGrid, UiGridItem } from '@uireact/grid';

import { UiTableData } from './types';
import { Table, TableHeadingCol, TableRow, TableCol } from './private';

export type UiTableProps = {
  /** The data object that will be rendered in the table */
  data: UiTableData;
  /** The theme category that will be applied to the styling */
  category?: ColorCategory;
  /** Flag to disable the filter bar */
  withFilter?: boolean;
  /** Flag for positioning the filter bar */
  filterBoxPosition?: 'left' | 'right';
  /** The id of the selected field */
  selected?: string;
  /** onClick CB to be executed when a row is selected */
  onClick?: (id: string) => void;
} & UiReactElementProps;

const iconSpacing: UiSpacingProps['margin'] = { top: 'two', left: 'four' };

export const UiTable: React.FC<UiTableProps> = ({
  className,
  data,
  category = 'primary',
  testId,
  withFilter = true,
  filterBoxPosition,
  selected,
  onClick,
}: UiTableProps) => {
  const theme = React.useContext(ThemeContext);
  const [_data, setPrivateData] = useState(data);
  const [filterPhrase, setFilterPhrase] = useState('');

  const onFilter = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const newFilterPhrase = e.currentTarget.value;
      setFilterPhrase(newFilterPhrase);

      const filteredData = data.items.filter(
        (field) => field.cols.filter((text) => text.includes(newFilterPhrase)).length > 0
      );

      setPrivateData({ ...data, items: filteredData });
    },
    [setFilterPhrase, onClick]
  );

  const handleClick = useCallback(
    (id: string) => {
      onClick?.(id);
    },
    [onClick]
  );

  useEffect(() => {
    setPrivateData(data);
  }, [data]);

  return (
    <div>
      {withFilter && (
        <UiGrid cols={{ small: 1, medium: 2, large: 3, xlarge: 3 }}>
          <UiGridItem cols={!filterBoxPosition ? 3 : 1} startingCol={filterBoxPosition === 'right' ? 3 : 1}>
            <UiInput
              value={filterPhrase}
              onChange={onFilter}
              icon={
                <UiSpacing margin={iconSpacing}>
                  <UiIcon icon="Search" />
                </UiSpacing>
              }
            />
          </UiGridItem>
        </UiGrid>
      )}
      <Table
        className={className}
        data-testid={testId}
        $customTheme={theme.theme}
        $selectedTheme={theme.selectedTheme}
        $category={category}
        cellSpacing="0"
      >
        <thead>
          <tr>
            {_data.headings.map((heading, index) => (
              <TableHeadingCol key={`table-heading-${index}`}>{heading}</TableHeadingCol>
            ))}
          </tr>
        </thead>
        <tbody>
          {_data.items.map((field, rowIndex) => (
            <TableRow
              key={`table-item-index-${rowIndex}`}
              $hasClickHandler={onClick !== undefined}
              $isSelected={selected === field.id}
              $customTheme={theme.theme}
              $selectedTheme={theme.selectedTheme}
              $category={category}
              onClick={() => handleClick(field.id)}
            >
              {field.cols.map((text, index) => (
                <TableCol key={`table-item-${rowIndex}-colum-index-${index}`}>{text}</TableCol>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

UiTable.displayName = 'UiTable';
