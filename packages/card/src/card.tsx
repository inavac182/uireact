import * as React from 'react';

import { ThemeContext, UiReactElementProps } from '@uireact/foundation';
import { CardWrapper, ContentWrapper, StyledLink, StyledExternalLink } from './private';

export type UiCardProps = UiReactElementProps & {
  /** on click handler used for handling custom card clicks, when passed cursor pointer is used */
  clickHandler?: (idenfifier: string | undefined) => void;
  /** The identifier that is shared to the click handler when card is clicked */
  identifier?: string;
  /** Link for redirecting when card is clicked */
  link?: string;
  /** Prop for internal link, when true the redirect uses internal react link */
  internalLink?: boolean;
  /** The card renders with padding around the content */
  padded?: boolean;
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
        customTheme={themeContext.theme}
        onClick={!props.link ? onClick : undefined}
        cursorNeeded={props.clickHandler !== undefined}
      >
        <ContentWrapper customTheme={themeContext.theme} padded={props.padded}>
          {props.children}
        </ContentWrapper>
      </CardWrapper>
    ),
    [props, themeContext.theme]
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
