import React from 'react';

import styled from 'styled-components';

import {
  ColorCategory,
  ColorTokens,
  ThemeContext,
  UiReactElementProps,
  getColorCategory,
  getThemeColor,
} from '@uireact/foundation';

import { UiTableData } from './types';
import { privateTableProps } from './types/private-table-props';

export type UiTableProps = {
  data: UiTableData;
  category?: ColorCategory;
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

export const UiTable: React.FC<UiTableProps> = ({ className, data, category = 'primary', testId }: UiTableProps) => {
  const theme = React.useContext(ThemeContext);

  return (
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
          {data.headings.map((heading, index) => (
            <TableHeadingCol key={`table-heading-${index}`}>{heading}</TableHeadingCol>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.fields.map((field, rowIndex) => (
          <tr key={`table-item-index-${rowIndex}`}>
            {field.map((text, index) => (
              <TableCol key={`table-item-${rowIndex}-colum-index-${index}`}>{text}</TableCol>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UiTable.displayName = 'UiTable';
