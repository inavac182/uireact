import { motion } from 'framer-motion';
import styled from 'styled-components';

import { UiFlexGrid } from '@uireact/flex';
import { UiIcon } from '@uireact/icons';


export const ScriptCardContainer = styled(motion.div)`
  margin: 20px 0;
  padding: 20px;
  border-radius: 20px 5px 20px 5px;
  color: var(--fonts-token_10);
  font-size: var(--texts-small);
  background-color: var(--secondary-token_100);
  cursor: pointer;
`;

type ScriptCardProps = {
  script: string;
};

export const ScriptCard = ({ script }: ScriptCardProps) => {
  return (
    <ScriptCardContainer whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <UiFlexGrid direction='row' columnGap='four'>
        <UiIcon icon="AngleSquareRight" /> {script}
      </UiFlexGrid>
    </ScriptCardContainer>
  )
};
