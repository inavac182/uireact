import styled from 'styled-components';

import { ColorCategory, ColorToken, UiReactPrivateElementProps, getThemeStyling } from '@uireact/foundation';

import { getDynamicCardMapper } from '../theme';

type __CardProps = {
  /** If card should show a border */
  $bordered?: boolean;
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
  $weight?: ColorToken;
  /** If the card should take full height */
  $fullHeight?: boolean;
  /** If the card should take full width */
  $fullWidth?: boolean;
} & UiReactPrivateElementProps & {
    $category?: ColorCategory;
    $cursorNeeded?: boolean;
  };

export const CardWrapper = styled.div<__CardProps>`
  ${(props) => `
    ${getThemeStyling(props.$customTheme, props.$selectedTheme, getDynamicCardMapper(props.$weight, props.$category))}
    ${props.$cursorNeeded ? 'cursor: pointer;' : ''}
    ${!props.$squared ? 'border-radius: 3px;' : ''}
    ${!props.$noPadding ? 'padding: 5px;' : ''}
    ${props.$bordered ? 'border-width: 2px; border-style: solid;' : ''}
    ${props.$fullWidth ? 'width: 100%;' : ''}
    ${props.$fullHeight ? 'height: 100%;' : ''}
  `}

  transition: background .2s, border-color .2s;
  box-sizing: border-box;
`;
