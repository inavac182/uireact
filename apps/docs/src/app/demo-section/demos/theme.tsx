import styled from "styled-components"

import { UiHeading, UiText } from "@uireact/text"
import { ColorCategory, UiSpacing, UiSpacingProps } from "@uireact/foundation";

import { DemoCard } from "@/app/internal"
import { UiList, UiListItem } from "@uireact/list";

type PrimaryProp = {
  $inverse?: boolean;
  $category: ColorCategory;
};

const ThemeDiv = styled.div<PrimaryProp>`
  background-color: var(--${props => props.$inverse ? 'inverse-' : ''}primary-token_10);
  padding: 20px;
  border-radius: 20px;
`;

const ColorDiv = styled.div<PrimaryProp>`
  background-color: var(--${props => props.$inverse ? 'inverse-' : ''}${props => props.$category}-token_100);
  width: 10px;
  height: 10px;
  border-radius: 10px;
  display: inline-block;
`;

const TableCell = styled.td`
  padding: 0px 10px;
`;

const settingsSpacing: UiSpacingProps['padding'] = { left: 'five' };

export const ThemeDemo = () => {
  return (
    <DemoCard category="primary" shadow={false} spacing={{}}>
      <>
        <UiHeading level={4}>Light and Dark colorations</UiHeading>
        <UiText>All components in the library are ready to render in these two colorations</UiText>
        <br />
        <ThemeDiv $category="primary">
          <UiHeading level={5}>Active theme</UiHeading>
          <UiText>These are the colors for the default theme included in the UiView</UiText>
          <br />
          <UiText>Main colors</UiText>
          <table>
            <tbody>
              <tr>
                <TableCell><UiText>Primary </UiText></TableCell>
                <TableCell><ColorDiv $category="primary" /></TableCell>
              </tr>
              <tr>
                <TableCell><UiText>Secondary </UiText></TableCell>
                <TableCell><ColorDiv $category="secondary" /></TableCell>
              </tr>
              <tr>
                <TableCell><UiText>Tertiary </UiText></TableCell>
                <TableCell><ColorDiv $category="tertiary" /></TableCell>
              </tr>
            </tbody>
          </table>
          <br />
          <UiText>Support colors</UiText>
          <table>
            <tbody>
              <tr>
                <TableCell><UiText>Positive </UiText></TableCell>
                <TableCell><ColorDiv $category="positive" /></TableCell>
              </tr>
              <tr>
                <TableCell><UiText>Warning </UiText></TableCell>
                <TableCell><ColorDiv $category="warning" /></TableCell>
              </tr>
              <tr>
                <TableCell><UiText>Error </UiText></TableCell>
                <TableCell><ColorDiv $category="error" /></TableCell>
              </tr>
              <tr>
                <TableCell><UiText>Negative </UiText></TableCell>
                <TableCell><ColorDiv $category="negative" /></TableCell>
              </tr>
            </tbody>
          </table>
        </ThemeDiv>
      </>
    </DemoCard>
  )
}