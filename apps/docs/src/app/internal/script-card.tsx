import { motion } from 'framer-motion';
import styled from 'styled-components';

import { UiFlexGrid } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';
import { useCallback } from 'react';

export const ScriptCardContainer = styled(motion.div)`
  margin: 20px 0;
  padding: 20px;
  border-radius: 20px 5px 20px 5px;
  color: var(fonts-token_10);
  font-size: 10px;
  line-height: 10px;
  background-color: var(--secondary-token_100);
  cursor: pointer;
  font-family: "Press Start 2P", system-ui;
`;

export const ScriptSpan = styled(motion.span)`
  font-family: var(--press-start-font-family);
  text-wrap: wrap;
  font-size: 10px;
  cursor: pointer;
`;

type ScriptCardProps = {
  script: string;
};

export const ScriptCard = ({ script }: ScriptCardProps) => {
  const onScriptClick = useCallback(() => {
    navigator.clipboard.writeText(script);
  }, [script]);

  return (
    <ScriptCardContainer whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={onScriptClick}>
      <UiFlexGrid direction='row' columnGap='four' alignItems='center'>
        <UiIcon icon="AngleSquareRight" />
        <ScriptSpan>{script}</ScriptSpan>
      </UiFlexGrid>
    </ScriptCardContainer>
  )
};

export const ScriptText = ({ script }: ScriptCardProps) => {
  const onScriptClick = useCallback(() => {
    navigator.clipboard.writeText(script);
  }, [script]);

  return (
    <UiFlexGrid direction='row' columnGap='five' alignItems='center'>
      <UiIcon icon="AngleSquareRight" />
      <ScriptSpan whileTap={{ scale: 0.8 }} onClick={onScriptClick}>{script}</ScriptSpan>
    </UiFlexGrid>
  )
}