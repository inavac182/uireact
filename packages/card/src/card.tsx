import * as React from 'react';

import { ThemeContext, UiReactElementProps } from '@uireact/foundation';
import { CardWrapper, ContentWrapper, StyledLink, StyledExternalLink } from './private';

export type UiCardProps = UiReactElementProps & {
  clickHandler?: (idenfifier: string | undefined) => void;
  identifier?: string;
  link?: string;
  linkType?: 'internal' | 'external';
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
          {props?.children}
        </ContentWrapper>
      </CardWrapper>
    ),
    [props, themeContext.theme]
  );

  if (props.link) {
    return props.linkType === 'internal' ? (
      <StyledLink to={props.link}>{CardWrapperMemo}</StyledLink>
    ) : (
      <StyledExternalLink href={props.link}>{CardWrapperMemo}</StyledExternalLink>
    );
  }

  return <>{CardWrapperMemo}</>;
};

UiCard.displayName = 'UiCard';
