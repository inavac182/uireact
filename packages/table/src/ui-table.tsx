import React, { FormEvent, useCallback, useState } from 'react';

import styled from 'styled-components';

import {
  ColorCategory,
  ColorTokens,
  ThemeContext,
  UiReactElementProps,
  UiSpacing,
  UiSpacingProps,
  getColorCategory,
  getThemeColor,
} from '@uireact/foundation';
import { UiInput } from '@uireact/form';
import { UiIcon } from '@uireact/icons';
import { UiGrid, UiGridItem } from '@uireact/grid';

import { UiTableData } from './types';
import { privateTableProps } from './types/private-table-props';

export type UiTableProps = {
  data: UiTableData;
  category?: ColorCategory;
  withFilter?: boolean;
  filterBoxPosition?: 'left' | 'right';
} & UiReactElementProps;

const Table = styled.table<privateTableProps>`
  width: 100%;
  th {
    ${(props) => `
    border: 0;
    margin: 0;
    border-bottom: 3px solid ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$category),
      ColorTokens.token_200
    )};
  `}
  }
`;

const TableHeadingCol = styled.th`
  text-align: center;
`;

const TableCol = styled.td`
  text-align: center;
`;

const iconSpacing: UiSpacingProps['margin'] = { top: 'two', left: 'four' };

export const UiTable: React.FC<UiTableProps> = ({
  className,
  data,
  category = 'primary',
  testId,
  withFilter = true,
  filterBoxPosition,
}: UiTableProps) => {
  const theme = React.useContext(ThemeContext);
  const [_data, setPrivateData] = useState(data);
  const [filterPhrase, setFilterPhrase] = useState('');

  const onFilter = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const newFilterPhrase = e.currentTarget.value;
      setFilterPhrase(newFilterPhrase);

      const filteredData = data.fields.filter(
        (field) => field.filter((text) => text.includes(newFilterPhrase)).length > 0
      );

      setPrivateData({ ...data, fields: filteredData });
    },
    [setFilterPhrase]
  );

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
                  <UiIcon icon="MagnifyingGlass" />
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
          {_data.fields.map((field, rowIndex) => (
            <tr key={`table-item-index-${rowIndex}`}>
              {field.map((text, index) => (
                <TableCol key={`table-item-${rowIndex}-colum-index-${index}`}>{text}</TableCol>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

UiTable.displayName = 'UiTable';
