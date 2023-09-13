import * as React from 'react';

import { ColorCategory, ColorToken, ThemeContext, UiReactElementProps } from '@uireact/foundation';
import { CardWrapper, StyledLink, StyledExternalLink } from './private';

export type UiCardProps = UiReactElementProps & {
  /** If card should show a border */
  bordered?: boolean;
  /** on click handler used for handling custom card clicks, when passed cursor pointer is used */
  clickHandler?: (idenfifier: string | undefined) => void;
  /** If the card should take full height */
  fullHeight?: boolean;
  /** If the card should take full width */
  fullWidth?: boolean;
  /** The identifier that is shared to the click handler when card is clicked */
  identifier?: string;
  /** Link for redirecting when card is clicked */
  link?: string;
  /** Prop for internal link, when true the redirect uses internal react link */
  internalLink?: boolean;
  /** Useful when we want to render content at the edge of the card, e.g. Images */
  noPadding?: boolean;
  /** If the card should render with squared corners, default FALSE */
  squared?: boolean;
  /** Card state */
  category?: ColorCategory;
  /** Card weight used for background color */
  weight?: ColorToken;
};

export const UiCard: React.FC<UiCardProps> = (props: UiCardProps) => {
  const themeContext = React.useContext(ThemeContext);

  const onClick = React.useCallback(() => {
    if (props.clickHandler) {
      props.clickHandler(props.identifier);
    }
  }, [props.identifier, props.clickHandler]);

  const CardWrapperMemo = React.useMemo(
    () => (
      <CardWrapper
        $bordered={props.bordered}
        $category={props.category}
        className={props.className}
        $customTheme={themeContext.theme}
        $fullWidth={props.fullWidth}
        $fullHeight={props.fullHeight}
        $selectedTheme={themeContext.selectedTheme}
        onClick={!props.link ? onClick : undefined}
        $cursorNeeded={props.clickHandler !== undefined}
        $squared={props.squared}
        $noPadding={props.noPadding}
        $weight={props.weight}
      >
        {props.children}
      </CardWrapper>
    ),
    [props, themeContext]
  );

  if (props.link) {
    return props.internalLink ? (
      <StyledLink to={props.link}>{CardWrapperMemo}</StyledLink>
    ) : (
      <StyledExternalLink href={props.link}>{CardWrapperMemo}</StyledExternalLink>
    );
  }

  return <>{CardWrapperMemo}</>;
};

UiCard.displayName = 'UiCard';
