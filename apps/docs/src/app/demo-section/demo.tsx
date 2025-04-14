
import { motion } from 'motion/react';
import styled from 'styled-components';
import Link from 'next/link';

import { UiButtonLink, UiHeading, UiText } from "@uireact/text";
import { UiLineSeparator } from '@uireact/separator';
import { UiSpacing, UiSpacingProps } from '@uireact/foundation';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { UiDialog } from '@uireact/dialog';

import { Separator } from '../internal/section/separator';
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

const dialogSpacing: UiSpacingProps['padding'] = { all: 'three'};
const headingSpacing: UiSpacingProps['padding'] = { block: 'three', inline: 'five' };

export const Demo = () => {
  return (
    <>
      <SeparatorWrapper>
        <Separator weight='50' />
      </SeparatorWrapper>
      <DemoContainer id="demo-components">
        <UiSpacing padding={headingSpacing}>
          <UiFlexGrid alignItems='center' justifyContent='center' columnGap='four'>
            <UiFlexGridItem grow={1}>
              <UiHeading level={4}>@UiReact | Themed Components</UiHeading>
            </UiFlexGridItem>
            <UiFlexGridItem>
              <UiButtonLink padding={{ inline: 'three', block: 'two'}} category='secondary'>
                <Link href="docs/">
                  <UiFlexGrid gap='two'>
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