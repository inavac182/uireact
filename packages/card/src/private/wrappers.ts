import styled from 'styled-components';

import { motion } from 'framer-motion';

import { ColorCategory, ColorToken, getColorCategory, getColorTokenValue } from '@uireact/foundation';

type __CardProps = {
  /** on click handler used for handling custom card clicks, when passed cursor pointer is used */
  $clickHandler?: (idenfifier: string | undefined) => void;
  /** The identifier that is shared to the click handler when card is clicked */
  $identifier?: string;
  /** Link for redirecting when card is clicked */
  $link?: string;
  /** Prop for internal link, when true the redirect uses internal react link */
  $internalLink?: boolean;
  /** Useful when we want to render content at the edge of the card, e.g. Images */
  $noPadding?: boolean;
  /** If the card should render with squared corners, default FALSE */
  $squared?: boolean;
  /** Card weigth used for background color */
  $weight: ColorToken;
  /** If the card should take full height */
  $fullHeight?: boolean;
  /** If the card should take full width */
  $fullWidth?: boolean;
  $category?: ColorCategory;
  $cursorNeeded?: boolean;
  $styling?: 'outlined' | 'filled';
};

export const CardWrapper = styled(motion.div)<__CardProps>`
  ${(props) => `
    ${props.$cursorNeeded ? 'cursor: pointer;' : ''}
  `}

  ${(props) => {
    if (props.$styling === 'outlined') {
      return `
        border-color: var(--${getColorCategory(props.$category)}-${getColorTokenValue(props.$weight)});
        border-width: 3px;
        border-style: solid;
        color: var(--${getColorCategory(props.$category)}-token_100);
      `;
    } else {
      return `
        background-color: var(--${getColorCategory(props.$category)}-${getColorTokenValue(props.$weight)});
        color: var(--fonts-token_100);
      `;
    }
  }}

  border-radius: 10px;
  transition: background .2s, border-color .2s;
  box-sizing: border-box;
`;
