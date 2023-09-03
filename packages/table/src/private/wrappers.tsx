import styled from 'styled-components';

import { getThemeColor, getColorCategory, ColorTokens } from '@uireact/foundation';

import { privateTableProps, privateTableRowProps } from '../types/private-table-props';

export const Table = styled.table<privateTableProps>`
  width: 100%;

  th {
    ${(props) => `
    border: 0;
    margin: 0;
    border-bottom: 3px solid ${getThemeColor(
      props.$customTheme,
      props.$selectedTheme,
      getColorCategory(props.$category),
      ColorTokens.token_100
    )};
  `}
  }
`;

export const TableHeadingCol = styled.th`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TableCol = styled.td`
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const TableRow = styled.tr<privateTableRowProps>`
  ${(props) => `
    ${
      props.$hasClickHandler
        ? `
            cursor: pointer;
            &:hover {
              background: ${getThemeColor(
                props.$customTheme,
                props.$selectedTheme,
                getColorCategory(props.$category),
                ColorTokens.token_100
              )};
            }
            transition: background .2s;
          `
        : ''
    }
    ${
      props.$isSelected
        ? `
            background: ${getThemeColor(
              props.$customTheme,
              props.$selectedTheme,
              getColorCategory(props.$category),
              ColorTokens.token_100
            )};
          `
        : ''
    }
  `}
`;
