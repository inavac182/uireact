import { useCallback, useContext, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

import { UiButtonLink, UiHeading, UiText } from "@uireact/text";
import { UiLineSeparator } from '@uireact/separator';
import { ThemeColor, UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiButton } from '@uireact/button';
import { UiDialog } from '@uireact/dialog';

import { Separator } from '../internal/section/separator';
import { DocsThemeContext } from '../providers';
import { ShowcaseGrid } from './showcase';

const DemoContainer = styled(motion.div)`
  position: sticky;
  height: 200vh;
  top: 0;
`;

const SeparatorWrapper = styled.div`
  margin-top: -280px;
`;

const dialogId = 'demo-dialog';

const dialogSpacing: UiSpacingProps['padding'] = { all: 'four'};
const headingSpacing: UiSpacingProps['padding'] = { block: 'four', inline: 'five' };

export const Demo = () => {
  const { selectTheme, selectedTheme } = useContext(DocsThemeContext);
  const toggleTheme = useCallback(() => {
    selectTheme(selectedTheme === ThemeColor.dark ? ThemeColor.light : ThemeColor.dark);
  }, [selectTheme, selectedTheme]);

  return (
    <>
      <SeparatorWrapper>
        <Separator weight='50' />
      </SeparatorWrapper>
      <DemoContainer id="demo-components">
        <UiSpacing padding={headingSpacing}>
          <UiFlexGrid justifyContent='center' columnGap='four'>
            <UiFlexGridItem grow={1}>
              <UiHeading level={4}>@UiReact | Themed Components</UiHeading>
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiButton styling='icon' category='primary' onClick={toggleTheme}>
                <UiIcon icon="CircleHalfStroke" />
              </UiButton>
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiButtonLink padding={{ inline: 'five', block: 'three'}} category='secondary'>
                <Link href="docs/">
                  <UiFlexGrid gap='three'>
                    <UiIcon icon='Book' inverseColoration/> 
                    <UiText inverseColoration>Docs</UiText>
                  </UiFlexGrid>
                </Link>
              </UiButtonLink>
            </UiFlexGridItem>
          </UiFlexGrid>
        </UiSpacing>
        <UiLineSeparator />
        <ShowcaseGrid />
        <UiDialog dialogId={dialogId}>
            <UiSpacing padding={dialogSpacing}>
                <UiHeading>Hey there!</UiHeading>
                <UiText>This is a centered dialog</UiText>
            </UiSpacing>
        </UiDialog>
      </DemoContainer>
    </>
  )
}